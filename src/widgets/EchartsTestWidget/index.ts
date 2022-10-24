import Widget from "./widget";
import IconSVG from "./icon.svg";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "Echarts 测试", // The display name which will be made in uppercase and show in the widgets panel ( can have spaces )
  iconSVG: IconSVG,
  needsMeta: false, // Defines if this widget adds any meta properties
  isCanvas: false, // Defines if this widget has a canvas within in which we can drop other widgets
  defaults: {
    widgetName: "EchartsTest",
    rows: 32,
    columns: 24,
    version: 1,
    tableData: [
      { value: 1048, name: "Search Engine" },
      { value: 735, name: "Direct" },
      { value: 580, name: "Email" },
      { value: 484, name: "Union Ads" },
      { value: 300, name: "Video Ads" },
    ],
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
  },
};

export default Widget;
