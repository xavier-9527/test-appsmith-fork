/*
 * @Author: Narcissus 577008637@qq.com
 * @Date: 2022-10-20 14:52:42
 * @LastEditors: Narcissus 577008637@qq.com
 * @LastEditTime: 2022-10-20 16:01:48
 * @FilePath: \test-appsmith-fork\app\client\src\widgets\ThreeTestDemoWidget\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Widget from "./widget";
import IconSVG from "./icon.svg";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "ThreeTestDemo", // The display name which will be made in uppercase and show in the widgets panel ( can have spaces )
  iconSVG: IconSVG,
  needsMeta: false, // Defines if this widget adds any meta properties
  isCanvas: false, // Defines if this widget has a canvas within in which we can drop other widgets
  defaults: {
    widgetName: "ThreeTestDemo",
    rows: 65,
    columns: 55,
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
