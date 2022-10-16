import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { Dom } from "./Dom";
import { getStyles } from "./getStyles";

type ExpenseFrequency = "monthly" | "yearly";

const categoryRecord = {
  infrastructure: "インフラ",
};

type CategoryKey = keyof typeof categoryRecord;

const lastEditedTimeStamp = dayjs().unix();

export type ExpenseItemCardProps = {
  name: string;
  price: number;
  expenseFrequency: ExpenseFrequency;
  categoryKey: CategoryKey;
};

export const ExpenseItemCard = ({
  name,
  price,
  expenseFrequency,
  categoryKey,
}: ExpenseItemCardProps): JSX.Element => {
  const styles = getStyles();

  const lastEditedTime = dayjs(lastEditedTimeStamp).format("YYYY/MM/DD");
  const category = categoryRecord[categoryKey];
  const cost_unit = expenseFrequency === "monthly" ? "月" : "年";

  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <Dom
      {...{
        styles,
        name,
        price,
        category,
        lastEditedTime,
        cost_unit,
        expanded,
        toggleExpanded,
      }}
    />
  );
};
