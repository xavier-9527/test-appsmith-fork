import Widget from "./widget";
import IconSVG from "./icon.svg";
import { GDMapProps } from "./component";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "高德地图",
  iconSVG: IconSVG,
  defaults: {
    ...GDMapProps,
    iconName: "GDMap",
    isDisabled: false,
    isVisible: true,
    rows: 50,
    columns: 50,
    widgetName: "GDMap",
    version: 1,
    animateLoading: true,
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
