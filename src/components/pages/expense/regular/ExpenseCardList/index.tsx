import { useEffect, useMemo } from "react";
import { useExpenseRegular } from "../useExpenseRegular";
import Dom from "./Dom";
import { getStyles } from "./getStyles";
import { useSortRegularExpense } from "./useSortRegularExpense";
import { ExpenseRegular } from "src/const/expenseRegular";

const ExpenseCardList = (): JSX.Element => {
  const { expenseRegular } = useExpenseRegular();

  const {
    sortOptions,
    currentSortOption,
    handleCurrentSortOption,
    getSortedRegularExpense,
  } = useSortRegularExpense();

  const sortedRegularExpense = useMemo(
    () => getSortedRegularExpense(currentSortOption, expenseRegular),
    [currentSortOption, expenseRegular, getSortedRegularExpense]
  );

  const styles = getStyles();

  return (
    <Dom
      {...{
        styles,
        expenseRegular,
        sortOptions,
        currentSortOption,
        handleCurrentSortOption,
        sortedRegularExpense,
      }}
    />
  );
};

export default ExpenseCardList;
