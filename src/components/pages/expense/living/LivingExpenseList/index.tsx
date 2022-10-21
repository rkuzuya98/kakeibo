import Dom from "./Dom";
import { getStyles } from "./getStyles";

const livingExpenseItems = [
  {
    title: "普段の食費",
    note: "一日1000円x2人x30日",
    cost: "60000",
  },
  {
    title: "外食費",
    note: "1回2000円x2人x5回",
    cost: "20000",
  },
  {
    title: "日用品",
    note: "ざっくり",
    cost: "10000",
  },
  {
    title: "その他娯楽費",
    note: "ざっくり",
    cost: "20000",
  },
];

export const LivingExpenseList = () => {
  const styles = getStyles();

  return (
    <Dom
      {...{
        styles,
        livingExpenseItems,
      }}
    />
  );
};
