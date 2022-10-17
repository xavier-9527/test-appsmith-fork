/*
 * @Author: Narcissus 577008637@qq.com
 * @Date: 2022-10-13 15:35:27
 * @LastEditors: Narcissus 577008637@qq.com
 * @LastEditTime: 2022-10-17 11:51:06
 * @FilePath: \test-appsmith-fork\app\client\src\widgets\BarEchartWidget\component\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useCallback, useEffect, useRef } from "react";
import * as echarts from "echarts";
import styled from "styled-components";

const ChartBox = styled.div`
  width: 800px;
  height: 500px;
`;

function BarEchartComponent(props: BarEchartComponentProps) {
  const { BarChartOption, PaneProps } = props;
  const { mainTitle, seriesData, subTitle } = PaneProps || {};
  const barChartRef = useRef(null);

  // 设置表格数据
  const handleEchartsData = useCallback(() => {
    if (barChartRef.current) {
      const myCharts = echarts.init(barChartRef.current);
      const data = [
        {
          value: seriesData[0]["value"] || 120,
          itemStyle: {
            color: "#5470C6",
          },
        },
        {
          value: seriesData[1]["value"] || 200,
          itemStyle: {
            color: "#91CC75",
          },
        },
        {
          value: seriesData[2]["value"] || 150,
          itemStyle: {
            color: "#FAC858",
          },
        },
        {
          value: seriesData[3]["value"] || 80,
          itemStyle: {
            color: "#EE6666",
          },
        },
        {
          value: seriesData[4]["value"] || 70,
          itemStyle: {
            color: "#73C0DE",
          },
        },
      ];
      const currentOption: BarChartOption = {
        ...BarChartOption,
        title: {
          ...BarChartOption.title,
          text: mainTitle || "主标题",
          subtext: subTitle || "副标题",
        },
        series: [{ ...BarChartOption.series[0], data }],
      };
      myCharts.setOption(currentOption);
    }
  }, [mainTitle, subTitle, seriesData]);

  useEffect(() => {
    handleEchartsData();
  }, [handleEchartsData]);

  return (
    <div>
      <ChartBox ref={barChartRef} />
    </div>
  );
}

export type BarChartOption = {
  title: {
    text: string;
    subtext: string;
  };
  xAxis: {
    type: string;
    data: string[];
  };
  yAxis: {
    type: string;
  };
  series: Array<{
    data: Array<{
      value: number;
      itemStyle: {
        color: string;
      };
    }>;
    type: string;
    showBackground: boolean;
    backgroundStyle: {
      color: string;
    };
  }>;
};

export interface BarEchartComponentProps {
  BarChartOption: BarChartOption;
  PaneProps?: {
    mainTitle: string;
    subTitle: string;
    seriesData: any;
  };
}

export default BarEchartComponent;
