import { css } from "@emotion/react";
import { LivingExpenseList } from "./LivingExpenseList";
import * as Layout from "@/components/layouts/Layout";

const LivingExpensePageComponent = () => {
  return (
    <Layout.Root>
      <Layout.AppBar pageTitle="生活出費" />
      <Layout.Content>
        <LivingExpenseList />
      </Layout.Content>
      <Layout.Footer />
    </Layout.Root>
  );
};

export default LivingExpensePageComponent;
