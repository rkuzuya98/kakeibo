import type { NextPage } from "next";
import useSWR from "swr";
import ExpenseCardList from "./ExpenseCardList";
import AppBar from "@/components/layouts/appBar";
import { fetcher } from "src/swr/fetcher";

const ExpenseRegularPageComponent: NextPage = () => {
  const { data } = useSWR("/expenseRegular/", fetcher);

  console.log({ data });

  return (
    <div>
      <AppBar pageTitle="定期出費" ActionButton={<button>編集</button>} />
      <ExpenseCardList />
    </div>
  );
};

export default ExpenseRegularPageComponent;
