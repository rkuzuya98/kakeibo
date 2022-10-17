import { RefObject } from "react";
import { getStyles } from "./getStyles";
import { ExpenseItemInfo } from ".";
import {
  ArrowUnderIcon4,
  TagIcon7,
  TimeElapsedIcon1,
} from "@/components/icons";

type DomProps = {
  styles: ReturnType<typeof getStyles>;
  expenseItemInfo: ExpenseItemInfo;
  expanded: boolean;
  toggleExpanded: () => void;
  expandAreaRef: RefObject<HTMLDivElement>;
};

export const Dom = ({
  styles,
  expenseItemInfo,
  expanded,
  toggleExpanded,
  expandAreaRef,
}: DomProps) => {
  return (
    <div css={styles["root"]}>
      {/* 上部 */}
      <div css={styles["upperPart"]}>
        <div css={styles["upperPart_leftColumn"]}>
          <div css={styles["nameAndFixedCost"]}>
            <div css={styles["name"]}>{expenseItemInfo["name"]}</div>
            <div css={styles["fixedCostLabel"]}>確定費</div>
          </div>
          <div css={styles["cost"]}>
            <span css={styles["cost_value"]}>{expenseItemInfo["price"]}</span>
            <span
              css={styles["cost_unit"]}
            >{` 円 / ${expenseItemInfo["cost_unit"]}`}</span>
          </div>
        </div>
        <div css={styles["emoji"]}>
          <div>💡</div>
        </div>
      </div>

      {/* 省略コンテンツ */}
      {/* {expanded && (
        <div>
        </div>
      )} */}
      <div css={styles["centerPart"]} ref={expandAreaRef}>
        {/* {
          expanded && (
            <div>
              <div>詳細</div>
              <div>詳細</div>
            </div>
          )
        } */}
        詳細
        <div>詳細</div>
        <div>詳細</div>
      </div>

      {/* 区切り線 */}
      <div css={styles["divider"]} />

      {/* 下部 */}
      <button css={styles["lowerPart"]} onClick={toggleExpanded}>
        <div css={styles["infoContainer"]}>
          <div css={styles["info"]}>
            <TimeElapsedIcon1 css={styles["info_icon"]} />
            <div css={styles["info_text"]}>
              {expenseItemInfo["lastEditedTime"]}
            </div>
          </div>
          <div css={styles["info"]}>
            <TagIcon7 css={styles["info_icon"]} />
            <div css={styles["info_text"]}>{expenseItemInfo["category"]}</div>
          </div>
        </div>
        <ArrowUnderIcon4 css={styles["toggleIcon"]} />
      </button>
    </div>
  );
};
