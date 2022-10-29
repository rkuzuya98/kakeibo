import LivingExpenseItemEditForm from "./LivingExpenseItemEditForm";
import * as Layout from "@/components/layouts/Layout";

const LivingExpenseItemEditPageComponent = () => {
  return (
    <Layout.Root>
      <Layout.AppBar />
      <Layout.Content>
        <LivingExpenseItemEditForm />
      </Layout.Content>
      <Layout.Footer />
    </Layout.Root>
  );
};

export default LivingExpenseItemEditPageComponent;
