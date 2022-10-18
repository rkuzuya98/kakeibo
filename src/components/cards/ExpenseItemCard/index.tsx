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
  price: string;
  expenseFrequency: ExpenseFrequency;
  expenseCategoryKey: ExpenseCategoryKey;
  lastEditedTime: number;
};

export type ExpenseItemInfo = {
  lastEditedTime: string;
  category: string;
  name: string;
  price: string;
  cost_unit: "月" | "年";
};

export const ExpenseItemCard = ({
  name,
  price,
  expenseFrequency,
  expenseCategoryKey,
  lastEditedTime,
}: ExpenseItemCardProps): JSX.Element => {
  /** 開閉エリア */
  const { expandAreaRef, expanded, toggleExpanded, expandAreaHeight } =
    useExpandArea();

  // console.log(lastEditedTime)
  // console.log(dayjs(1666104535479).format("YYYY/MM/DD"),)
  // console.log(dayjs().valueOf())

  /** 出費項目の情報 */
  const expenseItemInfo: ExpenseItemInfo = {
    lastEditedTime: dayjs(lastEditedTime).format("YYYY/MM/DD"),
    category: expenseCategories[expenseCategoryKey]["name"],
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
