import type { NextPage } from "next";
import AppBar from "@/components/layouts/appBar";

const ExpenseRegularPageComponent: NextPage = () => {
  return (
    <div>
      <AppBar pageTitle="定期出費" ActionButton={<button>編集</button>} />
      <div>定期出費</div>
    </div>
  );
};

export default ExpenseRegularPageComponent;
