import LivingExpenseItem from "../LivingExpenseItem";
import { getStyles } from "./getStyles";

export type DomProps = {
  styles: ReturnType<typeof getStyles>;
  livingExpenseItems: any[];
};

const Dom = ({ styles, livingExpenseItems }: DomProps): JSX.Element => (
  <div css={styles["root"]}>
    {livingExpenseItems.map((item, index) => {
      return (
        <LivingExpenseItem
          key={index}
          title={item.title}
          note={item.note}
          cost={item.cost}
        />
      );
    })}
  </div>
);

export default Dom;
