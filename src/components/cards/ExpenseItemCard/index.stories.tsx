// eslint-disable-next-line import/named
import { ComponentStory } from "@storybook/react";
import { ExpenseItemCard } from ".";

export default {
  title: "EstimatedExpenseItem",
  component: ExpenseItemCard,
};

const Template: ComponentStory<typeof ExpenseItemCard> = (arg) => (
  <ExpenseItemCard {...arg} />
);

export const Default = Template.bind({});

Default.args = {
  name: "水道代",
  price: 4000,
  expenseFrequency: "monthly",
  categoryKey: "infrastructure",
};
