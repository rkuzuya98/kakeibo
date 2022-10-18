// ref. https://docs.google.com/spreadsheets/d/1aZfTGovUBiME5aRvF4htNKUyDlMk5VDxMKUCpfC5pLU/edit#gid=0
export const expenseCategories = {
  utilityBill: {
    name: "水道光熱費",
    explanation: "水道代、電気代、ガス代など",
  },
  webBill: {
    name: "通信費",
    explanation: "スマホ料金、インターネット料金など",
  },
  housingCost: {
    name: "住宅費",
    explanation: "家賃、住宅ローン、駐車場代など",
  },
  insuranceFee: {
    name: "保険料",
    explanation: "生命保険、医療保険、介護保険など",
  },
  foodCost: {
    name: "食費",
    explanation: "",
  },
  leisureCost: {
    name: "娯楽費",
    explanation: "",
  },
} as const;

export type ExpenseCategoryKey = keyof typeof expenseCategories;
export type ExpenseCategoryValue = typeof expenseCategories[ExpenseCategoryKey];
