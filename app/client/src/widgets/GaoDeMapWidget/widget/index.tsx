import React from "react";
import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
import GDMapComponent from "../component";
import { ValidationTypes } from "constants/WidgetValidation";
import { WidgetType } from "constants/WidgetConstants";

export interface GDMapWidgetProps extends WidgetProps {
  longitude: string;
  latitude: string;
  zoom: string;
  viewMode: string;
}

class GDMapWidget extends BaseWidget<GDMapWidgetProps, WidgetState> {
  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "general",
        children: [
          {
            propertyName: "longitude",
            label: "经度",
            helpText: "设置中心位置",
            controlType: "INPUT_TEXT",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            defaultValue: "104.06751573",
            validation: { type: ValidationTypes.TEXT },
          },
          {
            propertyName: "latitude",
            helpText: "设置中心位置",
            label: "纬度",
            controlType: "INPUT_TEXT",
            isBindProperty: true,
            isTriggerProperty: false,
            defaultValue: "30.65298012",
            validation: { type: ValidationTypes.TEXT },
          },
          {
            propertyName: "zoom",
            helpText: "调整精度",
            label: "zoom",
            controlType: "DROP_DOWN",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            options: [
              {
                label: "11",
                value: "11",
              },
              {
                label: "13",
                value: "13",
              },
              {
                label: "15",
                value: "15",
              },
            ],
          },
          {
            propertyName: "viewMode",
            helpText: "控件模式",
            label: "viewMode",
            controlType: "DROP_DOWN",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            isDisabled: true,
            options: [
              {
                label: "2d",
                value: "2d",
              },
              {
                label: "3d",
                value: "3d",
              },
            ],
          },
        ],
      },
    ];
  }

  static getPropertyPaneContentConfig() {
    return [];
  }

  static getPropertyPaneStyleConfig() {
    return [];
  }

  getPageView() {
    return <GDMapComponent />;
  }

  static getWidgetType(): WidgetType {
    return "GDMAP_WIDGET";
  }
}

export default GDMapWidget;
