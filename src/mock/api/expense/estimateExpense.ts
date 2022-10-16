import { rest } from "msw";

export const estimateExpenseHandler = rest.get(
  "/estimateExpense",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        // summary: "string",
        // detail: "string",
        // frequency: "onceEveryTwoMonths",
        // items: [
        //   {
        //     name: 'string',
        //     amount: 100
        //   },
        //   {
        //     name: "string",
        //     amount: 100
        //   },
        // ],
        rent: "10",
        waterBill: "100",
      })
    );
  }
);
