export const expenseCategories = {
  infrastructure: "インフラ",
  house: "住宅",
} as const;

export type ExpenseCategoryKey = keyof typeof expenseCategories;
export type ExpenseCategoryValue = typeof expenseCategories[ExpenseCategoryKey];
