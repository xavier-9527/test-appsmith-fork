import React, { Component } from "react";
import styled from "styled-components";
import * as echarts from "echarts";

const PieWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export type PieProps = {
  option: any;
  children?: any;
};

class PieComponent extends Component<PieProps> {
  pieRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.handleUpdateChart(this.props.option);
  }

  componentDidUpdate(preProps: PieProps) {
    if (preProps.option != this.props.option) {
      const options = this.handleData();
      this.handleUpdateChart(options);
    }
  }

  handleData = () => {
    const { option } = this.props;
    const {
      legend,
      legendAlign,
      legendOrient,
      series,
      seriesData,
      seriesRadius = 30,
      textStyle,
      textStyleFontSize,
      textStyleFontWeight,
      title,
      titleSubtext,
      titleText,
      tooltip,
      tooltipShow,
      tooltipTrigger,
    } = option;
    let temp = option;
    temp = {
      ...temp,
      title: {
        ...title,
        text: titleText || title.text,
        subtext: titleSubtext || title.subtext,
      },
      legend: {
        ...legend,
        orient: legendOrient || legend.orient,
        align: legendAlign || legend.align,
      },
      tooltip: {
        ...tooltip,
        show: tooltipShow || tooltip.show,
        trigger: tooltipTrigger || tooltip.trigger,
      },
      series: [
        {
          ...series[0],
          radius: (seriesRadius && `${seriesRadius}%`) || series.radius,
          data: seriesData || series.data,
        },
      ],
      textStyle: {
        ...textStyle,
        fontWeight: textStyleFontWeight || "normal",
        fontSize: (textStyleFontSize && `${textStyleFontSize}px`) || "12px",
      },
    };
    return temp;
  };

  handleUpdateChart = (options: PieProps) => {
    const node = this.pieRef.current;
    const renderedInstance = echarts.getInstanceByDom(node as HTMLDivElement);
    let chartInstance = null;
    if (renderedInstance) {
      chartInstance = renderedInstance;
    } else {
      chartInstance = echarts.init(node as HTMLDivElement);
    }
    chartInstance.setOption(options);
  };

  render() {
    return <PieWrapper ref={this.pieRef} />;
  }
}

export default PieComponent;
