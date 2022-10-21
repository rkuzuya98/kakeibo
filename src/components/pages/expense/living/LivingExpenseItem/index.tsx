import { useRouter } from "next/router";
import { useCallback } from "react";
import Dom from "./Dom";
import { getStyles } from "./getStyles";
import { pagesPath } from "src/lib/$path";

export type LivingExpenseItemProps = {
  title: string;
  note: string;
  cost: string;
};

const LivingExpenseItem = ({
  title,
  note,
  cost,
}: LivingExpenseItemProps): JSX.Element => {
  const router = useRouter();

  const styles = getStyles();

  const toLivingExpenseItemPage = useCallback(() => {
    router.push(pagesPath.expense.living._id(1).$url());
  }, [router]);

  return (
    <Dom
      {...{
        styles,
        title,
        note,
        cost,
        toLivingExpenseItemPage,
      }}
    />
  );
};

export default LivingExpenseItem;
