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
    rows: 4, // 放置在画布上时此小部件默认占用的行数
    columns: 16, // 放置在画布上时此小部件默认占用的列数
    widgetName: "Text000", // 自动生成的小部件名称前缀，用于这种类型的小部件。这不能有空格或特殊字符，自动从1开始累加，例如：Text0001
    shouldTruncate: false, // ？？？用于app\client\src\utils\migrations\TextWidget.ts，暂不清楚
    overflow: OverflowTypes.NONE, // General\Overflow的默认值: No overflow
    version: 1, // 此类小部件的版本号
    animateLoading: true, // General\Animate Loading的默认值
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(), // 派生属性是根据小部件的其他属性计算得出的属性，可以帮助在渲染之前获取相关值
    default: Widget.getDefaultPropertiesMap(), // 默认属性是定义其他属性的默认值的映射（在属性窗格中配置）
    meta: Widget.getMetaPropertiesMap(), // 元属性是其值是瞬态的并且不持久存在于应用程序中的属性，通常是用户输入
    config: Widget.getPropertyPaneConfig(), // 返回右侧panel的配置
  },
};

export default Widget;
