import { getStyles } from "./getStyles";
import { SortOptionKey } from "./useSortRegularExpense";
import { ExpenseItemCard } from "@/components/cards/ExpenseItemCard";
import Select, { SelectProps } from "@/components/selects";
import { ExpenseRegular } from "src/const/expenseRegular";

export type DomProps = {
  styles: ReturnType<typeof getStyles>;
  expenseRegular: ExpenseRegular[];
  sortOptions: SelectProps["options"];
  currentSortOption: SortOptionKey;
  handleCurrentSortOption: (sortOptionKey: SortOptionKey) => void;
  sortedRegularExpense: ExpenseRegular[];
};

const Dom = ({
  styles,
  expenseRegular,
  sortOptions,
  currentSortOption,
  handleCurrentSortOption,
  sortedRegularExpense,
}: DomProps) => (
  <div css={styles["root"]}>
    <Select
      options={sortOptions}
      onValueChange={handleCurrentSortOption as () => void}
    />
    {sortedRegularExpense.map((item) => {
      return (
        <ExpenseItemCard
          key={item.name}
          name={item.name || ""}
          price={item.price}
          expenseFrequency={item.frequency}
          expenseCategoryKey={item.category}
          lastEditedTime={item.lastEditedTime}
        />
      );
    })}
  </div>
);

export default Dom;
