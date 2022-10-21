/* eslint-disable import/named */
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import LivingExpenseItem from ".";

export default { component: LivingExpenseItem } as ComponentMeta<
  typeof LivingExpenseItem
>;

export const Index: ComponentStoryObj<typeof LivingExpenseItem> = {
  args: {},
};
