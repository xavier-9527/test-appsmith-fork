import React from "react";
import { pick } from "lodash";
// import styled from "styled-components";

import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
// import { DerivedPropertiesMap } from "utils/WidgetFactory";
import WidgetStyleContainer from "components/designSystems/appsmith/WidgetStyleContainer";

import TextTestComponent from "../component";

class TextTestWidget extends BaseWidget<TextTestWidgetProps, WidgetState> {
  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "常规设置",
        children: [
          {
            // 必填属性
            propertyName: "text",
            label: "文本内容",
            placeholderText: "文本内容",
            controlType: "INPUT_TEXT",
            isBindProperty: true,
            isTriggerProperty: false,

            // 可选属性
          },
        ],
      },
      {
        sectionName: "样式设置",
        children: [
          {
            // 必填属性
            propertyName: "textColor",
            label: "文本颜色",
            placeholderText: "文本颜色",
            controlType: "COLOR_PICKER",
            isBindProperty: true,
            isTriggerProperty: false,

            // 可选属性
            // isJSConvertible: true
          },
          {
            propertyName: "backgroundColor",
            label: "文本背景颜色",
            placeholderText: "文本背景颜色",
            controlType: "COLOR_PICKER",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            propertyName: "borderWidth",
            label: "边框宽度",
            placeholderText: "输入一个像素值(px)",
            controlType: "INPUT_TEXT",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            propertyName: "borerColor",
            label: "边框颜色",
            placeholderText: "#FFFFFF / Gray / rgb(255, 99, 71)",
            controlType: "COLOR_PICKER",
            isBindProperty: true,
            isTriggerProperty: false,
          },
        ],
      },
    ];
  }

  // static getDerivedPropertiesMap(): DerivedPropertiesMap {
  //   return {};
  // }

  // static getDefaultPropertiesMap(): Record<string, string> {
  //   return {};
  // }

  // static getMetaPropertiesMap(): Record<string, any> {
  //   return {};
  // }

  getPageView() {
    const { backgroundColor, text, textColor, widgetId } = this.props;
    return (
      <WidgetStyleContainer
        className="t--text-widget-container"
        {...pick(this.props, ["widgetId", "borderWidth", "borderColor"])}
      >
        <TextTestComponent
          backgroundColor={backgroundColor}
          key={widgetId}
          text={text}
          textColor={textColor}
          widgetId={widgetId}
        />
      </WidgetStyleContainer>
    );
  }

  static getWidgetType(): string {
    return "TEXTTEST_WIDGET";
  }
}

export interface TextTestWidgetProps extends WidgetProps {
  widgetId: string;
  text?: string;
}

export default TextTestWidget;
