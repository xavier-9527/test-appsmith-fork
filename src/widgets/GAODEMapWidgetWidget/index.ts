import Widget, { GAODEMapWidgetComponentPropsDefault } from "./widget";
import IconSVG from "./icon.svg";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "GDMAP_WIDGET",
  iconSVG: IconSVG,
  needsMeta: false,
  isCanvas: false,
  defaults: {
    ...GAODEMapWidgetComponentPropsDefault,
    widgetName: "GDMAP_WIDGET",
    rows: 50,
    columns: 50,
    version: 1,
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
  },
};

export default Widget;
