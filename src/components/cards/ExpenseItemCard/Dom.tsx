import { getStyles } from "./getStyles";
import {
  ArrowUnderIcon4,
  TagIcon7,
  TimeElapsedIcon1,
} from "@/components/icons";

type DomProps = {
  styles: ReturnType<typeof getStyles>;
  name: string;
  price: number;
  category: string;
  lastEditedTime: string;
  cost_unit: string;
  expanded: boolean;
  toggleExpanded: () => void;
};

export const Dom = ({
  styles,
  name,
  price,
  category,
  lastEditedTime,
  cost_unit,
  expanded,
  toggleExpanded,
}: DomProps) => {
  return (
    <div css={styles["root"]}>
      {/* 上部 */}
      <div css={styles["upperPart"]}>
        <div css={styles["upperPart_leftColumn"]}>
          <div css={styles["nameAndFixedCost"]}>
            <div css={styles["name"]}>{name}</div>
            <div css={styles["fixedCostLabel"]}>確定費</div>
          </div>
          <div css={styles["cost"]}>
            <span css={styles["cost_value"]}>{price}</span>
            <span css={styles["cost_unit"]}>{` 円 / ${cost_unit}`}</span>
          </div>
        </div>
        <div css={styles["emoji"]}>
          <div>💡</div>
        </div>
      </div>

      {/* 省略コンテンツ */}
      {expanded && <div>詳細</div>}

      {/* 区切り線 */}
      <div css={styles["divider"]} />

      {/* 下部 */}
      <button css={styles["lowerPart"]} onClick={toggleExpanded}>
        <div css={styles["infoContainer"]}>
          <div css={styles["info"]}>
            <TimeElapsedIcon1 css={styles["info_icon"]} />
            <div css={styles["info_text"]}>{lastEditedTime}</div>
          </div>
          <div css={styles["info"]}>
            <TagIcon7 css={styles["info_icon"]} />
            <div css={styles["info_text"]}>{category}</div>
          </div>
        </div>
        <ArrowUnderIcon4 css={styles["toggleIcon"]} />
      </button>
    </div>
  );
};
