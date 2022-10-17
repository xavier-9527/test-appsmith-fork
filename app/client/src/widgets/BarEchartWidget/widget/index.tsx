/*
 * @Author: Narcissus 577008637@qq.com
 * @Date: 2022-10-13 15:35:27
 * @LastEditors: Narcissus 577008637@qq.com
 * @LastEditTime: 2022-10-17 11:38:49
 * @FilePath: \test-appsmith-fork\app\client\src\widgets\barEchartWidget\widget\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
// import styled from "styled-components";

import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
import { DerivedPropertiesMap } from "utils/WidgetFactory";

import BarEchartComponent from "../component";
import { ValidationTypes } from "constants/WidgetValidation";
import { EvaluationSubstitutionType } from "entities/DataTree/dataTreeFactory";

const BarChartOption = {
  title: {
    text: "主标题",
    subtext: "副标题",
  },
  xAxis: {
    type: "category",
    data: ["Search Engine", "Direct", "Email", "Union Ads", "Video Ads"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        {
          value: 120,
          itemStyle: {
            color: "#5470C6",
          },
        },
        {
          value: 200,
          itemStyle: {
            color: "#91CC75",
          },
        },
        {
          value: 150,
          itemStyle: {
            color: "#FAC858",
          },
        },
        {
          value: 80,
          itemStyle: {
            color: "#EE6666",
          },
        },
        {
          value: 70,
          itemStyle: {
            color: "#73C0DE",
          },
        },
      ],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};

class BarEchartWidget extends BaseWidget<BarEchartWidgetProps, WidgetState> {
  // 右侧面板属性设置
  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "通用",
        children: [
          {
            propertyName: "mainTitle",
            controlType: "INPUT_TEXT",
            label: "主标题",
            defaultValue: "请输入主标题",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            propertyName: "subTitle",
            controlType: "INPUT_TEXT",
            label: "副标题",
            defaultValue: "请输入副标题",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            helpText: "获取数据",
            propertyName: "seriesData",
            controlType: "INPUT_TEXT",
            label: "数据源",
            placeholderText: '[{ "Direct": 200 }]',
            defaultValue:
              '[{ "Search Engine": 120 },{ "Direct": 200 },{ "Email": 150 },{ "Union Ads": 80 },{ "Video Ads": 70 }]',
            inputType: "ARRAY",
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.OBJECT_ARRAY,
              params: {
                default: [],
              },
            },
            evaluationSubstitutionType:
              EvaluationSubstitutionType.SMART_SUBSTITUTE,
          },
        ],
      },
    ];
  }

  // 返回可以从其他属性派生的属性映射。
  static getDerivedPropertiesMap(): DerivedPropertiesMap {
    return {};
  }

  // 返回默认情况下采用默认属性值的属性列表
  static getDefaultPropertiesMap(): Record<string, string> {
    return {};
  }

  // 返回将被视为并存储为元属性的属性。
  static getMetaPropertiesMap(): Record<string, any> {
    return {};
  }

  getPageView() {
    const { mainTitle, seriesData, subTitle } = this.props;
    return (
      <BarEchartComponent
        BarChartOption={BarChartOption}
        PaneProps={{ mainTitle, subTitle, seriesData }}
      />
    );
  }

  static getWidgetType(): string {
    return "BARECHART_WIDGET";
  }
}

// export interface BarEchartWidgetProps extends WidgetProps {}
export type BarEchartWidgetProps = WidgetProps;

export default BarEchartWidget;
