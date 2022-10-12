import React from "react";
import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
import PieComponent from "../component";
import { WidgetType } from "constants/WidgetConstants";
import { DerivedPropertiesMap } from "utils/WidgetFactory";
import { ValidationTypes } from "constants/WidgetValidation";

type OPTION_TYPE = {
  title: object;
  tooltip: object;
  legend: object;
  series: Array<object>;
  textStyle: object;
};

type OPTIO_PROPS = OPTION_TYPE | PieWidgetProps;

export const PIE_OPTION: OPTIO_PROPS = {
  title: {
    text: "Referer of a Website",
    subtext: "Fake Data",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "30%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
  textStyle: {
    fontWeight: "normal",
    fontSize: "12px",
  },
};

class PieChartWidget extends BaseWidget<PieWidgetProps, WidgetState> {
  constructor(props: PieWidgetProps) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  static getPropertyPaneContentConfig() {
    return [];
  }

  static getPropertyPaneStyleConfig() {
    return [];
  }

  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "General",
        children: [
          {
            propertyName: "titleText",
            controlType: "INPUT_TEXT",
            label: "titleText",
            defaultValue: "Referer of a Website",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            propertyName: "titleSubtext",
            label: "titleSubtext",
            controlType: "INPUT_TEXT",
            defaultValue: "Fake Data",
            isBindProperty: false,
            isTriggerProperty: false,
          },
          {
            propertyName: "legendOrient",
            label: "legendOrient",
            controlType: "DROP_DOWN",
            isBindProperty: true,
            isTriggerProperty: false,
            defaultValue: "horizontal",
            options: [
              {
                label: "horizontal",
                value: "horizontal",
              },
              {
                label: "vertical",
                value: "vertical",
              },
            ],
          },
          {
            propertyName: "tooltipShow",
            label: "tooltipShow",
            controlType: "SWITCH",
            defaultValue: "true",
            isBindProperty: false,
            isTriggerProperty: false,
          },
          {
            propertyName: "tooltipTrigger",
            label: "tooltipTrigger",
            controlType: "DROP_DOWN",
            defaultValue: "item",
            isBindProperty: false,
            isTriggerProperty: false,
            options: [
              {
                label: "item",
                value: "item",
              },
              {
                label: "none",
                value: "none",
              },
            ],
          },
          {
            propertyName: "legendAlign",
            label: "legendAlign",
            controlType: "DROP_DOWN",
            defaultValue: "auto",
            isBindProperty: true,
            isTriggerProperty: false,
            options: [
              {
                label: "auto",
                value: "auto",
              },
              {
                label: "left",
                value: "left",
              },
              {
                label: "right",
                value: "right",
              },
            ],
          },
        ],
      },
      {
        sectionName: "Styles",
        children: [
          {
            propertyName: "seriesRadius",
            label: "seriesRadius(%)",
            defaultValue: 30,
            isBindProperty: true,
            isTriggerProperty: false,
            controlType: "INPUT_TEXT",
          },
          {
            propertyName: "textStyleFontWeight",
            label: "textStyleFontWeight",
            isBindProperty: true,
            isTriggerProperty: false,
            controlType: "DROP_DOWN",
            defaultValue: "normal",
            options: [
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "bolder",
                value: "bolder",
              },
              {
                label: "lighter",
                value: "lighter",
              },
            ],
          },
          {
            propertyName: "textStyleFontSize",
            label: "textStyleFontSize(px)",
            isBindProperty: true,
            isTriggerProperty: false,
            controlType: "INPUT_TEXT",
            defaultValue: "12",
          },
        ],
      },
      {
        sectionName: "dataSource",
        children: [
          {
            propertyName: "seriesData",
            label: "seriesData",
            controlType: "INPUT_TEXT",
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.ARRAY,
              default: [],
              params: {
                children: {
                  type: ValidationTypes.OBJECT,
                  params: {
                    required: true,
                    allowedKeys: [
                      {
                        name: "name",
                        type: ValidationTypes.TEXT,
                      },
                      {
                        name: "value",
                        type: ValidationTypes.TEXT,
                      },
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    ];
  }

  static getMetaPropertiesMap(): Record<string, any> {
    return {};
  }

  static getDerivedPropertiesMap(): DerivedPropertiesMap {
    return {};
  }

  getPageView() {
    return <PieComponent option={this.props} />;
  }

  static getWidgetType(): WidgetType {
    return "PIECHART_WIDGET";
  }

  return() {
    this.getPageView();
  }
}

export interface PieWidgetProps extends WidgetProps {
  titleText: string;
  titleSubtext: string;
  legendOrient: string;
  tooltipShow: string;
  tooltipTrigger: string;
  legendAlign: string;
  seriesRadius: string;
  textStyleFontWeight: string;
  seriesData: Array<object>;
}

export default PieChartWidget;
