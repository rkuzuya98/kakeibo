import useSWR from "swr";
import { ExpenseRegular } from "src/const/expenseRegular";
import { fetcher } from "src/swr/fetcher";

const initialExpenseRegular: ExpenseRegular[] = [];

const normalizeExpenseRegular = (data: any): ExpenseRegular[] =>
  data.map((d: any) => ({
    name: d.name,
    price: d.price,
    frequency: d.frequency,
    category: d.category,
    lastEditedTime: d.lastEditedTime,
  }));

export const useExpenseRegular = () => {
  const { data } = useSWR("/expenseRegular/", fetcher);

  return {
    expenseRegular: data
      ? normalizeExpenseRegular(data)
      : initialExpenseRegular,
  };
};
