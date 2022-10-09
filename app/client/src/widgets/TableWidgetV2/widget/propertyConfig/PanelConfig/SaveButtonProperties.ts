import { ValidationTypes } from "constants/WidgetValidation";
import {
  ColumnTypes,
  ICON_NAMES,
  TableWidgetProps,
} from "widgets/TableWidgetV2/constants";
import { ButtonVariantTypes } from "components/constants";
import { hideByColumnType } from "../../propertyUtils";

export default {
  sectionName: "Save Button",
  hidden: (props: TableWidgetProps, propertyPath: string) => {
    return hideByColumnType(
      props,
      propertyPath,
      [ColumnTypes.EDIT_ACTIONS],
      true,
    );
  },
  children: [
    {
      propertyName: "isSaveVisible",
      dependencies: ["primaryColumns"],
      label: "是否显示",
      helpText: "Controls the visibility of the save button",
      defaultValue: true,
      controlType: "SWITCH",
      customJSControl: "TABLE_COMPUTE_VALUE",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: false,
      validation: {
        type: ValidationTypes.TABLE_PROPERTY,
        params: {
          type: ValidationTypes.BOOLEAN,
        },
      },
    },
    {
      propertyName: "isSaveDisabled",
      label: "禁用",
      defaultValue: false,
      controlType: "SWITCH",
      customJSControl: "TABLE_COMPUTE_VALUE",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: false,
      validation: {
        type: ValidationTypes.TABLE_PROPERTY,
        params: {
          type: ValidationTypes.BOOLEAN,
        },
      },
      dependencies: ["primaryColumns"],
    },
    {
      propertyName: "saveActionLabel",
      label: "Action label",
      controlType: "TABLE_COMPUTE_VALUE",
      dependencies: ["primaryColumns"],
      isBindProperty: true,
      isTriggerProperty: false,
    },
    {
      propertyName: "saveButtonColor",
      label: "按钮颜色",
      controlType: "PRIMARY_COLUMNS_COLOR_PICKER_V2",
      helpText: "修改按钮颜色",
      isJSConvertible: true,
      customJSControl: "TABLE_COMPUTE_VALUE",
      dependencies: ["primaryColumns"],
      isBindProperty: true,
      validation: {
        type: ValidationTypes.TABLE_PROPERTY,
        params: {
          type: ValidationTypes.TEXT,
          params: {
            regex: /^(?![<|{{]).+/,
          },
        },
      },
      isTriggerProperty: false,
    },
    {
      propertyName: "saveButtonVariant",
      label: "按钮类型",
      controlType: "DROP_DOWN",
      customJSControl: "TABLE_COMPUTE_VALUE",
      isJSConvertible: true,
      helpText: "Sets the variant of the save button",
      dependencies: ["primaryColumns"],
      options: [
        {
          label: "主按钮",
          value: ButtonVariantTypes.PRIMARY,
        },
        {
          label: "次级按钮",
          value: ButtonVariantTypes.SECONDARY,
        },
        {
          label: "文本按钮",
          value: ButtonVariantTypes.TERTIARY,
        },
      ],
      defaultValue: ButtonVariantTypes.PRIMARY,
      isBindProperty: true,
      isTriggerProperty: false,
      validation: {
        type: ValidationTypes.TABLE_PROPERTY,
        params: {
          type: ValidationTypes.TEXT,
          params: {
            default: ButtonVariantTypes.PRIMARY,
            allowedValues: [
              ButtonVariantTypes.PRIMARY,
              ButtonVariantTypes.SECONDARY,
              ButtonVariantTypes.TERTIARY,
            ],
          },
        },
      },
    },
    {
      propertyName: "saveBorderRadius",
      label: "边框圆角",
      customJSControl: "TABLE_COMPUTE_VALUE",
      isJSConvertible: true,
      helpText: "Rounds the corners of the save button's outer border edge",
      controlType: "BORDER_RADIUS_OPTIONS",
      dependencies: ["primaryColumns"],
      isBindProperty: true,
      isTriggerProperty: false,
      validation: {
        type: ValidationTypes.TABLE_PROPERTY,
        params: {
          type: ValidationTypes.TEXT,
        },
      },
    },
    {
      propertyName: "saveActionIconName",
      label: "Action Icon",
      helpText: "Sets the icon to be used for the save action button",
      dependencies: ["primaryColumns", "columnOrder"],
      controlType: "ICON_SELECT",
      customJSControl: "TABLE_COMPUTE_VALUE",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: false,
      validation: {
        type: ValidationTypes.TABLE_PROPERTY,
        params: {
          type: ValidationTypes.TEXT,
          params: {
            allowedValues: ICON_NAMES,
          },
        },
      },
    },
    {
      propertyName: "saveIconAlign",
      label: "图标对齐",
      helpText: "Sets the icon alignment of the save button",
      controlType: "ICON_TABS",
      defaultValue: "left",
      options: [
        {
          icon: "VERTICAL_LEFT",
          value: "left",
        },
        {
          icon: "VERTICAL_RIGHT",
          value: "right",
        },
      ],
      isBindProperty: false,
      isTriggerProperty: false,
      dependencies: ["primaryColumns"],
      validation: {
        type: ValidationTypes.TEXT,
        params: {
          allowedValues: ["center", "left", "right"],
        },
      },
    },
  ],
};
