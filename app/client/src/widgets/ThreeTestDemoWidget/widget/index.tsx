/*
 * @Author: Narcissus 577008637@qq.com
 * @Date: 2022-10-20 14:52:42
 * @LastEditors: Narcissus 577008637@qq.com
 * @LastEditTime: 2022-10-20 17:34:16
 * @FilePath: \test-appsmith-fork\app\client\src\widgets\ThreeTestDemoWidget\widget\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
// import styled from "styled-components";

import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
import { DerivedPropertiesMap } from "utils/WidgetFactory";

import ThreeTestDemoComponent from "../component";
// import { ValidationTypes } from "constants/WidgetValidation";
// import { EvaluationSubstitutionType } from "entities/DataTree/dataTreeFactory";

class ThreeTestDemoWidget extends BaseWidget<
  ThreeTestDemoWidgetProps,
  WidgetState
> {
  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "尺寸",
        children: [
          {
            propertyName: "xAxis",
            controlType: "INPUT_TEXT",
            label: "盒子长度",
            placeholderText: "请输入10-1000之间的数字",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            propertyName: "zAxis",
            controlType: "INPUT_TEXT",
            label: "盒子宽度",
            placeholderText: "请输入10-1000之间的数字",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            propertyName: "yAxis",
            controlType: "INPUT_TEXT",
            label: "盒子高度",
            placeholderText: "请输入10-1000之间的数字",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          // {
          //   helpText: "获取数据",
          //   propertyName: "seriesData",
          //   controlType: "INPUT_TEXT",
          //   label: "数据源",
          //   placeholderText: '[{ "Direct": 200 }]',
          //   defaultValue:
          //     '[{ "Search Engine": 120 },{ "Direct": 200 },{ "Email": 150 },{ "Union Ads": 80 },{ "Video Ads": 70 }]',
          //   inputType: "ARRAY",
          //   isBindProperty: true,
          //   isTriggerProperty: false,
          //   validation: {
          //     type: ValidationTypes.OBJECT_ARRAY,
          //     params: {
          //       default: [],
          //     },
          //   },
          //   evaluationSubstitutionType:
          //     EvaluationSubstitutionType.SMART_SUBSTITUTE,
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
    const { xAxis, yAxis, zAxis } = this.props;
    const BoxSize = { xAxis, yAxis, zAxis };
    return <ThreeTestDemoComponent BoxSizeOption={BoxSize} />;
  }

  static getWidgetType(): string {
    return "THREETESTDEMO_WIDGET";
  }
}

export type ThreeTestDemoWidgetProps = WidgetProps;

export default ThreeTestDemoWidget;
