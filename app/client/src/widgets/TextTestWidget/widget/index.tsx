import React from "react";
// import styled from "styled-components";

import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
// import { DerivedPropertiesMap } from "utils/WidgetFactory";

import TextTestComponent from "../component";

class TextTestWidget extends BaseWidget<TextTestWidgetProps, WidgetState> {
  static getPropertyPaneConfig() {
    return [];
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
    const { text, widgetId } = this.props;
    return <TextTestComponent text={text} widgetId={widgetId} />;
  }

  static getWidgetType(): string {
    return "TEXTTEST_WIDGET";
  }
}

export interface TextTestWidgetProps extends WidgetProps {
  text: string;
}

export default TextTestWidget;
