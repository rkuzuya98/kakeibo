import { getStyles } from "./getStyles";
import { ArrowRightIcon4 } from "@/components/icons";

export type DomProps = {
  styles: ReturnType<typeof getStyles>;
  title: string;
  note: string;
  cost: string;
  toLivingExpenseItemPage: () => void;
};

const Dom = ({
  styles,
  title,
  note,
  cost,
  toLivingExpenseItemPage,
}: DomProps): JSX.Element => (
  <button onClick={toLivingExpenseItemPage} css={styles["root"]}>
    <div css={styles["emoji"]}>🍚</div>
    <div css={styles["texts"]}>
      <div css={styles["title"]}>{title}</div>
      <div css={styles["price"]}>{cost}円</div>
      <div css={styles["note"]}>{note}</div>
    </div>
    <div css={styles["arrowRightIcon4Wrapper"]}>
      <ArrowRightIcon4 css={styles["arrowRightIcon4"]} />
    </div>
  </button>
);

export default Dom;
