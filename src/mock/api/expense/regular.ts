import { MockedRequest, ResponseResolver, rest, restContext } from "msw";
import { ExpenseRegular } from "src/const/expenseRegular";

const mockData: ExpenseRegular[] = [
  {
    name: "水道代",
    price: "2000",
    frequency: "monthly",
    category: "utilityBill",
    lastEditedTime: 1606104535479,
  },
  {
    name: "スマホ料金",
    price: "1000",
    frequency: "monthly",
    category: "webBill",
    lastEditedTime: 1266104535479,
  },
  {
    name: "電気代",
    price: "6000",
    frequency: "monthly",
    category: "utilityBill",
    lastEditedTime: 1666104535479,
  },
  {
    name: "ガス代",
    price: "4000",
    frequency: "monthly",
    category: "utilityBill",
    lastEditedTime: 1366104535479,
  },
  {
    name: "インターネット料金",
    price: "0",
    frequency: "monthly",
    category: "webBill",
    lastEditedTime: 1616104535479,
  },
  {
    name: "家賃",
    price: "100000",
    frequency: "monthly",
    category: "housingCost",
    lastEditedTime: 1665104535479,
  },
];

export const mockExpenseRegular: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockData));
};
