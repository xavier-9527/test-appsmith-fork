import GlobalHotKeys from "pages/Editor/GlobalHotKeys";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import * as utilities from "selectors/editorSelectors";
import * as useDynamicAppLayoutHook from "utils/hooks/useDynamicAppLayout";

import { RenderModes } from "constants/WidgetConstants";
import * as useCanvasDraggingHook from "pages/common/CanvasArenas/hooks/useCanvasDragging";
import store from "store";
import {
  buildChildren,
  widgetCanvasFactory,
} from "test/factories/WidgetFactoryUtils";
import { sagasToRunForTests } from "test/sagas";
import { MockApplication, mockGetCanvasWidgetDsl } from "test/testCommon";
import { UpdateAppViewer, UpdatedEditor } from "test/testMockedWidgets";
import { render } from "test/testUtils";
import { generateReactKey } from "widgets/WidgetUtils";
describe("ContainerWidget tests", () => {
  const mockGetIsFetchingPage = jest.spyOn(utilities, "getIsFetchingPage");
  const spyGetCanvasWidgetDsl = jest.spyOn(utilities, "getCanvasWidgetDsl");
  jest
    .spyOn(useDynamicAppLayoutHook, "useDynamicAppLayout")
    .mockImplementation(() => true);
  const pushState = jest.spyOn(window.history, "pushState");

  pushState.mockImplementation((state: any, title: any, url: any) => {
    window.document.title = title;
    window.location.pathname = url;
  });
  it("Container widget should not invoke dragging and selection features in View mode", async () => {
    const containerId = generateReactKey();
    const canvasId = generateReactKey();
    const children: any = buildChildren([
      {
        type: "CHECKBOX_WIDGET",
        parentId: canvasId,
        renderMode: RenderModes.PAGE,
      },
      {
        type: "SWITCH_WIDGET",
        parentId: canvasId,
        renderMode: RenderModes.PAGE,
      },
      {
        type: "BUTTON_WIDGET",
        parentId: canvasId,
        renderMode: RenderModes.PAGE,
      },
    ]);
    const canvasWidget = buildChildren([
      {
        type: "CANVAS_WIDGET",
        parentId: containerId,
        children,
        widgetId: canvasId,
        renderMode: RenderModes.PAGE,
      },
    ]);
    const containerChildren: any = buildChildren([
      {
        type: "CONTAINER_WIDGET",
        children: canvasWidget,
        widgetId: containerId,
        parentId: "0",
        renderMode: RenderModes.PAGE,
      },
    ]);
    const dsl: any = widgetCanvasFactory.build({
      children: containerChildren,
    });
    dsl.renderMode = RenderModes.PAGE;
    spyGetCanvasWidgetDsl.mockImplementation(mockGetCanvasWidgetDsl);
    mockGetIsFetchingPage.mockImplementation(() => false);
    const spyUseCanvasDragging = jest
      .spyOn(useCanvasDraggingHook, "useCanvasDragging")
      .mockImplementation(() => ({
        showCanvas: true,
      }));
    const appState = store.getState();
    const viewerState = {
      ...appState,
      ui: {
        ...appState.ui,
        onBoarding: {
          ...appState.ui.onBoarding,
          inOnboardingWidgetSelection: true,
          enableFirstTimeUserOnboarding: false,
          forceOpenWidgetPanel: false,
          firstTimeUserOnboardingApplicationId: "123",
          firstTimeUserOnboardingComplete: true,
          showFirstTimeUserOnboardingModal: false,
        },
      },
    };
    const viewComponent = render(
      <MemoryRouter initialEntries={["/app/applicationSlug/pageSlug-page_id/"]}>
        <MockApplication>
          <GlobalHotKeys>
            <UpdateAppViewer dsl={dsl} />
          </GlobalHotKeys>
        </MockApplication>
      </MemoryRouter>,
      { initialState: viewerState, sagasToRun: sagasToRunForTests },
    );

    expect(spyUseCanvasDragging).not.toHaveBeenCalled();
    const editComponent = render(
      <MemoryRouter
        initialEntries={["/app/applicationSlug/pageSlug-page_id/edit"]}
      >
        <MockApplication>
          <GlobalHotKeys>
            <UpdatedEditor dsl={dsl} />
          </GlobalHotKeys>
        </MockApplication>
      </MemoryRouter>,
      { initialState: viewerState, sagasToRun: sagasToRunForTests },
    );
    expect(spyUseCanvasDragging).toHaveBeenCalled();
  });
});
