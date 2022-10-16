/* eslint-disable import/named */
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import AppBar from ".";

export default { component: AppBar } as ComponentMeta<typeof AppBar>;

export const Index: ComponentStoryObj<typeof AppBar> = {
  args: {
    pageTitle: "お名前フォーム",
    ActionButton: <>ボタン</>,
  },
};
