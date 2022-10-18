// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ExpenseItemCard } from ".";

export default { component: ExpenseItemCard } as ComponentMeta<
  typeof ExpenseItemCard
>;

export const Index: ComponentStoryObj<typeof ExpenseItemCard> = {
  args: {
    name: "水道代",
    price: "4000",
    expenseFrequency: "monthly",
    expenseCategoryKey: "foodCost",
  },
};
