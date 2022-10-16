import { MockedRequest, ResponseResolver, rest, restContext } from "msw";

export const mockExpenseRegular: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      rent: "10",
      waterBill: "100",
    })
  );
};
