import type { NextPage } from "next";
import LivingExpensePageComponent from "@/components/pages/expense/living";
import LivingExpenseItemPageComponent from "@/components/pages/expense/living/[id]";

const LivingExpenseItemPage: NextPage = () => {
  return <LivingExpenseItemPageComponent />;
};

export default LivingExpenseItemPage;
