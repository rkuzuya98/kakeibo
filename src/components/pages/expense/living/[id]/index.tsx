import LivingExpenseItemDetail from "./LivingExpenseItemDetail";
import * as Layout from "@/components/layouts/Layout";

const LivingExpenseItemPageComponent = () => {
  return (
    <Layout.Root>
      <Layout.AppBar />
      <Layout.Header fixed={true} />
      <Layout.Content>
        <LivingExpenseItemDetail />
      </Layout.Content>
      <Layout.Footer />
    </Layout.Root>
  );
};

export default LivingExpenseItemPageComponent;
