import useSWR from "swr";
import { fetcher } from "src/swr/fetcher";

const ExpenseCardList = (): JSX.Element => {
  const { data } = useSWR("/expenseRegular/", fetcher);
  const { data: a } = useSWR("/estimateExpense/", fetcher);

  if (!data) return <></>;
  if (!a) return <></>;

  const expenseTitles = Object.keys(data);
  const as = Object.keys(a);

  return (
    <div>
      {expenseTitles.map((item) => {
        return <div key={item}>{data[item]}</div>;
      })}
      {as.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default ExpenseCardList;
