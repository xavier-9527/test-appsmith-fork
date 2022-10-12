import IconSVG from "./icon.svg";
import Widget, { PIE_OPTION } from "./widget";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "Echarts 饼图",
  iconSVG: IconSVG,
  needsMeta: true,
  isCanvas: false,
  defaults: {
    ...PIE_OPTION,
    widgetName: "PieChart",
    rows: 35,
    columns: 45,
    isDisabled: false,
    isVisible: true,
    isMirrored: true,
    version: 1,
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
    contentConfig: Widget.getPropertyPaneContentConfig(),
    styleConfig: Widget.getPropertyPaneStyleConfig(),
  },
};

export default Widget;
