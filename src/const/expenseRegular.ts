import { OptionType } from "dayjs";
import { ExpenseCategoryKey } from "./expenseCategories";

export type ExpenseFrequency = "yearly" | "monthly";

export type ExpenseRegular = {
  name: string;
  price: string;
  frequency: ExpenseFrequency;
  category: ExpenseCategoryKey;
  lastEditedTime: number;
};
