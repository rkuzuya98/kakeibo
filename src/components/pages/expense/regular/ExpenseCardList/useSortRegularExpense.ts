import { useCallback, useMemo, useState } from "react";
import { ExpenseRegular } from "src/const/expenseRegular";

export type SortOptionKey = "category" | "price" | "lastEditedTime";

export const sortOptionRecord: Record<SortOptionKey, string> = {
  category: "カテゴリー順",
  price: "金額順",
  lastEditedTime: "最終更新日順",
} as const;

export const useSortRegularExpense = () => {
  const [currentSortOption, setCurrentSortOption] =
    useState<SortOptionKey>("category");

  const handleCurrentSortOption = useCallback(
    (sortOptionKey: SortOptionKey) => {
      setCurrentSortOption(sortOptionKey);
    },
    []
  );

  const sortOptions = (Object.keys(sortOptionRecord) as SortOptionKey[]).map(
    (key) => ({
      value: key,
      text: sortOptionRecord[key],
    })
  );

  const getSortedRegularExpense = useCallback(
    (currentSortOption: SortOptionKey, regularExpense: ExpenseRegular[]) => {
      if (currentSortOption === "price") {
        return [...regularExpense].sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
      }
      if (currentSortOption === "lastEditedTime") {
        return [...regularExpense].sort(
          (a, b) => a.lastEditedTime - b.lastEditedTime
        );
      }
      if (currentSortOption === "category") {
        return [...regularExpense].sort((a, b) =>
          a.category > b.category ? -1 : 1
        );
      }

      return regularExpense;
    },
    []
  );

  return {
    sortOptions,
    currentSortOption,
    handleCurrentSortOption,
    getSortedRegularExpense,
  };
};
