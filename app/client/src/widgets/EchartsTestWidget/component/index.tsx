import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function EchartsTestComponent(props: EchartsTestComponentProps) {
  const { option, tableData } = props;
  const echartsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (echartsRef.current) {
      const data: any = {
        ...option,
        series: option.series.map((item: object) => {
          return { ...item, data: [...tableData] };
        }),
      };
      const echart = echarts.init(echartsRef.current);
      echart.setOption(data);
    }
  }, [option, tableData]);

  return (
    <div
      ref={echartsRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export interface EchartsTestComponentProps {
  option: any;
  tableData: object[];
}

export default EchartsTestComponent;
