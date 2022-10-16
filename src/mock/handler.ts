import { rest } from "msw";
import { estimateExpenseHandler } from "./api/expense/estimateExpense";
import { mockExpenseRegular } from "./api/expense/regular";
// eslint-disable-next-line import/no-unresolved
// import { API } from '@/config.ts';

export const handlers = [
  // rest.post(`/login`, mockLogin),
  // rest.post(`/logout`, mockLogout),
  rest.get("/expenseRegular", mockExpenseRegular),
  estimateExpenseHandler,
];
