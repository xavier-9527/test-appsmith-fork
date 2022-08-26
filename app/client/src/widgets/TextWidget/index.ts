/**
 * 1. 配置左侧小部件名称和图标的显示
 * 2. 配置右侧表单中对应属性的初始值（与./widget中表单绑定的属性一一对应）
 */
import { DEFAULT_FONT_SIZE } from "constants/WidgetConstants";
import { OverflowTypes } from "./constants";
import IconSVG from "./icon.svg";
import Widget from "./widget";

export const CONFIG = {
  type: Widget.getWidgetType(), // 组件类型
  name: "Text_1", // 显示左侧小部件名称
  iconSVG: IconSVG, // 显示左侧小部件图标
  // defaults对象定义了小部件的默认初始值，与右侧的表单面板一一对应
  defaults: {
    text: "Label1", // General\Text的默认值
    fontSize: DEFAULT_FONT_SIZE, // Styles\Text Size的默认值
    fontStyle: "BOLD", // Styles\Font Style的默认值
    textAlign: "LEFT", // Styles\Text Align的默认值
    textColor: "#231F20", // Styles\Text Color的默认值
    truncateButtonColor: "#FFC13D", // Styles\Truncate Button Color的默认值, 当Overflow属性为Truncate text时显示
    rows: 4, // 小部件在画布中暂用的空间大小，行的默认值
    columns: 16, // 小部件在画布中暂用的空间大小，列的默认值
    widgetName: "Text000", // 创建小部件后，右侧最顶端显示的部件名称，自动从1开始累加，例如：Text0001
    shouldTruncate: false, // ？？？用于app\client\src\utils\migrations\TextWidget.ts，暂不清楚
    overflow: OverflowTypes.NONE, // General\Overflow的默认值: No overflow
    version: 1,
    animateLoading: true, // General\Animate Loading的默认值
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(), // 暂时不清楚
    default: Widget.getDefaultPropertiesMap(), // 暂时不清楚
    meta: Widget.getMetaPropertiesMap(), // 暂时不清楚
    config: Widget.getPropertyPaneConfig(), // 暂时不清楚
  },
};

export default Widget;
