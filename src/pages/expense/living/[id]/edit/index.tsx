import type { NextPage } from "next";
import LivingExpensePageComponent from "@/components/pages/expense/living";
import LivingExpenseItemPageComponent from "@/components/pages/expense/living/[id]";
import LivingExpenseItemEditPageComponent from "@/components/pages/expense/living/[id]/edit";

const LivingExpenseItemEditPage: NextPage = () => {
  return <LivingExpenseItemEditPageComponent />;
};

export default LivingExpenseItemEditPage;
