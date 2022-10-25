import React from "react";
import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
import { DerivedPropertiesMap } from "utils/WidgetFactory";
import GAODEMapWidgetComponent, {
  GAODEMapWidgetComponentProps,
} from "../component";
import { ValidationTypes } from "constants/WidgetValidation";

class GAODEMapWidget extends BaseWidget<GAODEMapWidgetProps, WidgetState> {
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
          // {
          //   propertyName: "zoom",
          //   helpText: "调整精度",
          //   label: "zoom",
          //   controlType: "INPUT_TEXT",
          //   isJSConvertible: true,
          //   isBindProperty: true,
          //   isTriggerProperty: false,
          //   defaultValue: "11",
          // },
        ],
      },
    ];
  }

  static getDerivedPropertiesMap(): DerivedPropertiesMap {
    return {};
  }

  static getDefaultPropertiesMap(): Record<string, string> {
    return {};
  }

  static getMetaPropertiesMap(): Record<string, any> {
    return {};
  }

  getPageView() {
    const { latitude, longitude, zoomTemp } = this.props;
    return (
      <GAODEMapWidgetComponent
        latitude={latitude}
        longitude={longitude}
        zoomTemp={zoomTemp}
      />
    );
  }

  static getWidgetType(): string {
    return "GDMAP_WIDGET";
  }
}

export type GAODEMapWidgetProps = WidgetProps;

export const GAODEMapWidgetComponentPropsDefault = {
  longitude: "104.06751573",
  latitude: "30.65298012",
  zoomTemp: "11",
};

export default GAODEMapWidget;
