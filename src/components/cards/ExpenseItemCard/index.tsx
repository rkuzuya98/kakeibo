import dayjs from "dayjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Dom } from "./Dom";
import { getStyles } from "./getStyles";
import { useExpandArea } from "./useExpandArea";
import {
  expenseCategories,
  ExpenseCategoryKey,
} from "src/const/expenseCategories";

type ExpenseFrequency = "monthly" | "yearly";

const lastEditedTimeStamp = dayjs().unix();

export type ExpenseItemCardProps = {
  name: string;
  price: number;
  expenseFrequency: ExpenseFrequency;
  expenseCategoryKey: ExpenseCategoryKey;
};

export type ExpenseItemInfo = {
  lastEditedTime: string;
  category: string;
  name: string;
  price: number;
  cost_unit: "月" | "年";
};

export const ExpenseItemCard = ({
  name,
  price,
  expenseFrequency,
  expenseCategoryKey,
}: ExpenseItemCardProps): JSX.Element => {
  /** 開閉エリア */
  const { expandAreaRef, expanded, toggleExpanded, expandAreaHeight } =
    useExpandArea();

  /** 出費項目の情報 */
  const expenseItemInfo: ExpenseItemInfo = {
    lastEditedTime: dayjs(lastEditedTimeStamp).format("YYYY/MM/DD"),
    category: expenseCategories[expenseCategoryKey],
    name,
    price,
    cost_unit: expenseFrequency === "monthly" ? "月" : "年",
  };

  /** スタイル */
  const styles = getStyles(expanded, expandAreaHeight);

  return (
    <Dom
      {...{
        styles,
        expenseItemInfo,
        expanded,
        toggleExpanded,
        expandAreaRef,
      }}
    />
  );
};
