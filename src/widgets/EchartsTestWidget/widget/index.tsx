import React from "react";
// import styled from "styled-components";

import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
import { DerivedPropertiesMap } from "utils/WidgetFactory";

import EchartsTestComponent from "../component";

const ECHART_OPTION = {
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
      radius: "50%",
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
};

class EchartsTestWidget extends BaseWidget<
  EchartsTestWidgetProps,
  WidgetState
> {
  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "数据",
        children: [
          {
            helpText: "表格数组数据",
            propertyName: "tableData",
            label: "数据",
            controlType: "INPUT_TEXT",
            placeholderText: '[{ "name": "John" }]',
            isBindProperty: true,
            isTriggerProperty: false,
          },
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
    const { tableData } = this.props;
    return (
      <EchartsTestComponent option={ECHART_OPTION} tableData={tableData} />
    );
  }

  static getWidgetType(): string {
    return "ECHARTSTEST_WIDGET";
  }
}

export interface EchartsTestWidgetProps extends WidgetProps {
  children?: React.ReactNode;
}

export default EchartsTestWidget;
