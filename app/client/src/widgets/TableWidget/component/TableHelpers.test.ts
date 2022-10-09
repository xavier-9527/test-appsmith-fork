import { ColumnProperties } from "./Constants";
import { removeSpecialChars, reorderColumns } from "./TableHelpers";
import { getCurrentRowBinding } from "widgets/TableWidget/constants";
const MOCK_COLUMNS: Record<string, ColumnProperties> = {
  id: {
    isDerived: false,
    computedValue: getCurrentRowBinding("Table1", "currentRow.id"),
    textSize: "PARAGRAPH",
    index: 0,
    isVisible: true,
    label: "id",
    columnType: "text",
    horizontalAlignment: "LEFT",
    width: 150,
    enableFilter: true,
    enableSort: true,
    id: "id",
    verticalAlignment: "CENTER",
  },

  name: {
    index: 1,
    width: 150,
    id: "name",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "name",
    computedValue: getCurrentRowBinding("Table1", "currentRow.name"),
  },
  createdAt: {
    index: 2,
    width: 150,
    id: "createdAt",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "createdAt",
    computedValue: getCurrentRowBinding("Table1", "currentRow.createdAt"),
  },
  updatedAt: {
    index: 3,
    width: 150,
    id: "updatedAt",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "updatedAt",
    computedValue: getCurrentRowBinding("Table1", "currentRow.updatedAt"),
  },
  status: {
    index: 4,
    width: 150,
    id: "status",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "status",
    computedValue: getCurrentRowBinding("Table1", "currentRow.status"),
  },
  gender: {
    index: 5,
    width: 150,
    id: "gender",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "gender",
    computedValue: getCurrentRowBinding("Table1", "currentRow.gender"),
  },
  avatar: {
    index: 6,
    width: 150,
    id: "avatar",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "avatar",
    computedValue: getCurrentRowBinding("Table1", "currentRow.avatar"),
  },
  address: {
    index: 8,
    width: 150,
    id: "address",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "address",
    computedValue: getCurrentRowBinding("Table1", "currentRow.address"),
  },
  role: {
    index: 9,
    id: "role",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    width: 150,
    label: "address",
    computedValue: getCurrentRowBinding("Table1", "currentRow.address"),
  },
  dob: {
    index: 10,
    width: 150,
    id: "dob",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "dob",
    computedValue: getCurrentRowBinding("Table1", "currentRow.dob"),
  },
  phoneNo: {
    index: 11,
    width: 150,
    id: "phoneNo",
    horizontalAlignment: "LEFT",
    verticalAlignment: "CENTER",
    columnType: "text",
    textSize: "PARAGRAPH",
    enableFilter: true,
    enableSort: true,
    isVisible: true,
    isDerived: false,
    label: "phoneNo",
    computedValue: getCurrentRowBinding("Table1", "currentRow.phoneNo"),
  },
  email: {
    isDerived: false,
    computedValue: getCurrentRowBinding("Table1", "currentRow.email"),
    textSize: "PARAGRAPH",
    index: 1,
    isVisible: true,
    label: "email",
    columnType: "text",
    horizontalAlignment: "LEFT",
    width: 150,
    enableFilter: true,
    enableSort: true,
    id: "email",
    verticalAlignment: "CENTER",
  },
};
describe("Validate Helpers", () => {
  it("correctly reorders columns", () => {
    const columnOrder = [
      "phoneNo",
      "id",
      "name",
      "createdAt",
      "updatedAt",
      "status",
      "gender",
      "avatar",
      "email",
      "address",
      "role",
      "dob",
    ];

    const expected = {
      phoneNo: {
        index: 0,
        width: 150,
        id: "phoneNo",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "phoneNo",
        computedValue: getCurrentRowBinding("Table1", "currentRow.phoneNo"),
      },
      id: {
        isDerived: false,
        computedValue: getCurrentRowBinding("Table1", "currentRow.id"),
        textSize: "PARAGRAPH",
        index: 1,
        isVisible: true,
        label: "id",
        columnType: "text",
        horizontalAlignment: "LEFT",
        width: 150,
        enableFilter: true,
        enableSort: true,
        id: "id",
        verticalAlignment: "CENTER",
      },
      name: {
        index: 2,
        width: 150,
        id: "name",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "name",
        computedValue: getCurrentRowBinding("Table1", "currentRow.name"),
      },
      createdAt: {
        index: 3,
        width: 150,
        id: "createdAt",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "createdAt",
        computedValue: getCurrentRowBinding("Table1", "currentRow.createdAt"),
      },
      updatedAt: {
        index: 4,
        width: 150,
        id: "updatedAt",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "updatedAt",
        computedValue: getCurrentRowBinding("Table1", "currentRow.updatedAt"),
      },
      status: {
        index: 5,
        width: 150,
        id: "status",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "status",
        computedValue: getCurrentRowBinding("Table1", "currentRow.status"),
      },
      gender: {
        index: 6,
        width: 150,
        id: "gender",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "gender",
        computedValue: getCurrentRowBinding("Table1", "currentRow.gender"),
      },
      avatar: {
        index: 7,
        width: 150,
        id: "avatar",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "avatar",
        computedValue: getCurrentRowBinding("Table1", "currentRow.avatar"),
      },
      email: {
        isDerived: false,
        computedValue: getCurrentRowBinding("Table1", "currentRow.email"),
        textSize: "PARAGRAPH",
        index: 8,
        isVisible: true,
        label: "email",
        columnType: "text",
        horizontalAlignment: "LEFT",
        width: 150,
        enableFilter: true,
        enableSort: true,
        id: "email",
        verticalAlignment: "CENTER",
      },
      address: {
        index: 9,
        width: 150,
        id: "address",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "address",
        computedValue: getCurrentRowBinding("Table1", "currentRow.address"),
      },
      role: {
        index: 10,
        id: "role",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        width: 150,
        label: "address",
        computedValue: getCurrentRowBinding("Table1", "currentRow.address"),
      },
      dob: {
        index: 11,
        width: 150,
        id: "dob",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "dob",
        computedValue: getCurrentRowBinding("Table1", "currentRow.dob"),
      },
    };

    const result = reorderColumns(MOCK_COLUMNS, columnOrder);

    expect(expected).toEqual(result);
  });

  it("Ignores duplicates in column order and includes all columns", () => {
    const columnOrder = [
      "phoneNo",
      "id",
      "name",
      "createdAt",
      "updatedAt",
      "status",
      "status",
      "gender",
      "avatar",
      "email",
    ];

    const expected = {
      phoneNo: {
        index: 0,
        width: 150,
        id: "phoneNo",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "phoneNo",
        computedValue: getCurrentRowBinding("Table1", "currentRow.phoneNo"),
      },
      id: {
        isDerived: false,
        computedValue: getCurrentRowBinding("Table1", "currentRow.id"),
        textSize: "PARAGRAPH",
        index: 1,
        isVisible: true,
        label: "id",
        columnType: "text",
        horizontalAlignment: "LEFT",
        width: 150,
        enableFilter: true,
        enableSort: true,
        id: "id",
        verticalAlignment: "CENTER",
      },
      name: {
        index: 2,
        width: 150,
        id: "name",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "name",
        computedValue: getCurrentRowBinding("Table1", "currentRow.name"),
      },
      createdAt: {
        index: 3,
        width: 150,
        id: "createdAt",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "createdAt",
        computedValue: getCurrentRowBinding("Table1", "currentRow.createdAt"),
      },
      updatedAt: {
        index: 4,
        width: 150,
        id: "updatedAt",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "updatedAt",
        computedValue: getCurrentRowBinding("Table1", "currentRow.updatedAt"),
      },
      status: {
        index: 5,
        width: 150,
        id: "status",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "status",
        computedValue: getCurrentRowBinding("Table1", "currentRow.status"),
      },
      gender: {
        index: 6,
        width: 150,
        id: "gender",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "gender",
        computedValue: getCurrentRowBinding("Table1", "currentRow.gender"),
      },
      avatar: {
        index: 7,
        width: 150,
        id: "avatar",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "avatar",
        computedValue: getCurrentRowBinding("Table1", "currentRow.avatar"),
      },
      email: {
        isDerived: false,
        computedValue: getCurrentRowBinding("Table1", "currentRow.email"),
        textSize: "PARAGRAPH",
        index: 8,
        isVisible: true,
        label: "email",
        columnType: "text",
        horizontalAlignment: "LEFT",
        width: 150,
        enableFilter: true,
        enableSort: true,
        id: "email",
        verticalAlignment: "CENTER",
      },
      address: {
        index: 9,
        width: 150,
        id: "address",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "address",
        computedValue: getCurrentRowBinding("Table1", "currentRow.address"),
      },
      role: {
        index: 10,
        id: "role",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        width: 150,
        label: "address",
        computedValue: getCurrentRowBinding("Table1", "currentRow.address"),
      },
      dob: {
        index: 11,
        width: 150,
        id: "dob",
        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        columnType: "text",
        textSize: "PARAGRAPH",
        enableFilter: true,
        enableSort: true,
        isVisible: true,
        isDerived: false,
        label: "dob",
        computedValue: getCurrentRowBinding("Table1", "currentRow.dob"),
      },
    };

    const result = reorderColumns(MOCK_COLUMNS, columnOrder);
    expect(expected).toEqual(result);
  });

  it("Remove space from table data values", () => {
    const input1 = "Table Header";
    const expected1 = "Table_Header";
    const result1 = removeSpecialChars(input1);
    expect(expected1).toEqual(result1);

    const input2 = "Col 1";
    const expected2 = "Col_1";
    const result2 = removeSpecialChars(input2);
    expect(expected2).toEqual(result2);
  });

  it("Remove space from table data that has non ASCII chars", () => {
    // preserve non ASCII chars even without space
    const input1 = "Leverantör";
    const expected1 = "Leverantör";
    const result1 = removeSpecialChars(input1);
    expect(expected1).toEqual(result1);

    const input2 = "Leverantör Frö";
    const expected2 = "Leverantör_Frö";
    const result2 = removeSpecialChars(input2);
    expect(expected2).toEqual(result2);
  });
});
