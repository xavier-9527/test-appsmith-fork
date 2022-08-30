/**
 * 包含小部件代码，它利用小部件开发 API 并让 Appsmith 平台知道如何呈现小部件
 * 1. 配置小部件的右侧表单，包括表单的验证规则，绑定的属性名
 * 2. 定义右侧用户发出的动作函数或事件，例如：shouldDisableLink开关设置定义是否禁用超链接
 * 3. 主要的行为事件有：
 *    shouldDisableLink
 *    executeAction
 *    disableDrag
 *    updateWidget
 *    deleteWidgetProperty
 *    batchUpdateWidgetProperty
 *    updateWidgetProperty
 *    resetChildrenMetaProperty
 *    getComponentDimensions
 *    calculateWidgetBounds
 *    getLabelWidth
 *    getErrorCount
 *    makeResizable
 *    showWidgetName
 *
 *    makeResizable
 *    showWidgetName
 *    makeDraggable
 *    makeSnipeable
 *    makePositioned
 *    addErrorBoundary
 *    addOverlayComments
 *    addPreventInteractionOverlay
 *    addPreviewModeWidget
 *    getCanvasView
 */
import React, { ReactNode } from "react";

import { TextSize } from "constants/WidgetConstants";
import { countOccurrences } from "workers/helpers";

import { ValidationTypes } from "constants/WidgetValidation";
import { DerivedPropertiesMap } from "utils/WidgetFactory";

import { Color } from "constants/Colors";
import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
import TextComponent, { TextAlign } from "../component";
import { ContainerStyle } from "widgets/ContainerWidget/component";
import { AutocompleteDataType } from "utils/autocomplete/TernServer";
import { OverflowTypes } from "../constants";
// 未知组件
import WidgetStyleContainer from "components/designSystems/appsmith/WidgetStyleContainer";
import { pick } from "lodash";

const MAX_HTML_PARSING_LENGTH = 1000;
class TextWidget extends BaseWidget<TextWidgetProps, WidgetState> {
  /* 与小部件相关的右侧表单配置 */
  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "General",
        children: [
          {
            propertyName: "text",
            helpText: "Sets the text of the widget",
            label: "Text",
            controlType: "INPUT_TEXT", // 控件的类型
            placeholderText: "Name:",
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.TEXT,
              params: { limitLineBreaks: true },
            },
          },
          {
            propertyName: "overflow",
            label: "Overflow",
            helpText: "Controls the text behavior when length of text exceeds",
            controlType: "DROP_DOWN",
            options: [
              {
                label: "Scroll contents",
                value: OverflowTypes.SCROLL,
              },
              {
                label: "Truncate text",
                value: OverflowTypes.TRUNCATE,
              },
              {
                label: "No overflow",
                value: OverflowTypes.NONE,
              },
            ],
            defaultValue: OverflowTypes.NONE,
            isBindProperty: false,
            isTriggerProperty: false,
          },
          {
            propertyName: "isVisible",
            helpText: "Controls the visibility of the widget",
            label: "Visible",
            controlType: "SWITCH",
            isJSConvertible: true, // 是否允许 Appsmith 开发人员使用 JS 按钮来允许绑定此属性。
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
          {
            propertyName: "animateLoading",
            label: "Animate Loading",
            controlType: "SWITCH",
            helpText: "Controls the loading of the widget",
            defaultValue: true,
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
          {
            propertyName: "disableLink",
            helpText: "Controls parsing text as Link",
            label: "Disable Link",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
        ],
      },
      {
        sectionName: "Styles",
        children: [
          {
            propertyName: "backgroundColor",
            label: "Cell Background Color",
            controlType: "COLOR_PICKER",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.TEXT,
              params: {
                regex: /^((?![<|{{]).+){0,1}/,
                expected: {
                  type: "string (HTML color name or HEX value)",
                  example: `red | #9C0D38`,
                  autocompleteDataType: AutocompleteDataType.STRING,
                },
              },
            },
          },
          {
            propertyName: "textColor",
            label: "Text Color",
            controlType: "COLOR_PICKER",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.TEXT,
              params: {
                regex: /^(?![<|{{]).+/,
              },
            },
          },
          {
            propertyName: "truncateButtonColor",
            label: "Truncate Button Color",
            controlType: "COLOR_PICKER",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.TEXT,
              params: {
                regex: /^(?![<|{{]).+/,
              },
            },
            dependencies: ["overflow"],
            hidden: (props: TextWidgetProps) => {
              return props.overflow !== OverflowTypes.TRUNCATE;
            },
          },
          {
            helpText: "Use a html color name, HEX, RGB or RGBA value",
            placeholderText: "#FFFFFF / Gray / rgb(255, 99, 71)",
            propertyName: "borderColor",
            label: "Border Color",
            controlType: "COLOR_PICKER",
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.TEXT },
          },
          {
            helpText:
              "Enter value for border width which can also use as margin",
            propertyName: "borderWidth",
            label: "Border Width",
            placeholderText: "Enter value in px",
            controlType: "INPUT_TEXT",
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.NUMBER },
          },
          {
            propertyName: "fontSize",
            label: "Text Size",
            controlType: "DROP_DOWN",
            defaultValue: "1rem",
            options: [
              {
                label: "S",
                value: "0.875rem",
                subText: "0.875rem",
              },
              {
                label: "M",
                value: "1rem",
                subText: "1rem",
              },
              {
                label: "L",
                value: "1.25rem",
                subText: "1.25rem",
              },
              {
                label: "XL",
                value: "1.875rem",
                subText: "1.875rem",
              },
              {
                label: "XXL",
                value: "3rem",
                subText: "3rem",
              },
              {
                label: "3XL",
                value: "3.75rem",
                subText: "3.75rem",
              },
            ],
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.TEXT,
            },
          },
          {
            propertyName: "fontFamily",
            label: "Font Family",
            controlType: "DROP_DOWN",
            options: [
              {
                label: "System Default",
                value: "System Default",
              },
              {
                label: "Nunito Sans",
                value: "Nunito Sans",
              },
              {
                label: "Poppins",
                value: "Poppins",
              },
              {
                label: "Inter",
                value: "Inter",
              },
              {
                label: "Montserrat",
                value: "Montserrat",
              },
              {
                label: "Noto Sans",
                value: "Noto Sans",
              },
              {
                label: "Open Sans",
                value: "Open Sans",
              },
              {
                label: "Roboto",
                value: "Roboto",
              },
              {
                label: "Rubik",
                value: "Rubik",
              },
              {
                label: "Ubuntu",
                value: "Ubuntu",
              },
            ],
            defaultValue: "System Default",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.TEXT,
            },
          },
          {
            propertyName: "fontStyle",
            label: "Font Style",
            controlType: "BUTTON_TABS",
            options: [
              {
                icon: "BOLD_FONT",
                value: "BOLD",
              },
              {
                icon: "ITALICS_FONT",
                value: "ITALIC",
              },
            ],
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.TEXT },
          },
          {
            propertyName: "textAlign",
            label: "Text Align",
            controlType: "ICON_TABS",
            options: [
              {
                icon: "LEFT_ALIGN",
                value: "LEFT",
              },
              {
                icon: "CENTER_ALIGN",
                value: "CENTER",
              },
              {
                icon: "RIGHT_ALIGN",
                value: "RIGHT",
              },
            ],
            defaultValue: "LEFT",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.TEXT },
          },
        ],
      },
    ];
  }

  /**
   * Disable html parsing for long continuous texts
   * @returns boolean
   */
  shouldDisableLink = (): boolean => {
    const text = this.props.text || "";
    const count: number = countOccurrences(text, "\n", false);
    return count === 0 && text.length > MAX_HTML_PARSING_LENGTH;
  };

  getPageView() {
    const disableLink: boolean = this.props.disableLink
      ? true
      : this.shouldDisableLink();
    return (
      <WidgetStyleContainer
        className="t--text-widget-container"
        {...pick(this.props, [
          "widgetId",
          "containerStyle",
          "borderColor",
          "borderWidth",
        ])}
      >
        <TextComponent
          backgroundColor={this.props.backgroundColor}
          bottomRow={this.props.bottomRow}
          disableLink={disableLink}
          fontFamily={this.props.fontFamily}
          fontSize={this.props.fontSize}
          fontStyle={this.props.fontStyle}
          isLoading={this.props.isLoading}
          key={this.props.widgetId}
          leftColumn={this.props.leftColumn}
          overflow={this.props.overflow}
          rightColumn={this.props.rightColumn}
          text={this.props.text}
          textAlign={this.props.textAlign ? this.props.textAlign : "LEFT"}
          textColor={this.props.textColor}
          topRow={this.props.topRow}
          truncateButtonColor={this.props.truncateButtonColor}
          widgetId={this.props.widgetId}
        />
      </WidgetStyleContainer>
    );
  }

  static getDerivedPropertiesMap(): DerivedPropertiesMap {
    return {
      value: `{{ this.text }}`,
    };
  }

  static getWidgetType() {
    return "TEXT_WIDGET";
  }
}

export interface TextStyles {
  backgroundColor?: string;
  textColor?: string;
  fontStyle?: string;
  fontSize?: TextSize;
  textAlign?: TextAlign;
  truncateButtonColor?: string;
  fontFamily: string;
}

export interface TextWidgetProps extends WidgetProps, TextStyles {
  text?: string;
  isLoading: boolean;
  disableLink: boolean;
  widgetId: string;
  containerStyle?: ContainerStyle;
  children?: ReactNode;
  borderColor?: Color;
  borderWidth?: number;
  overflow: OverflowTypes;
}

export default TextWidget;
