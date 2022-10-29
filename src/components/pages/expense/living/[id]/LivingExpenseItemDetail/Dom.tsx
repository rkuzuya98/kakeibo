import Link from "next/link";
import { getStyles } from "./getStyles";
import Breadcrumbs, { BreadcrumbsProps } from "@/components/breadcrumbs";
import DropdownMenu, { DropdownMenuProps } from "@/components/dropdownMenu";
import { HouseIcon2 } from "@/components/icons";
import Table from "@/components/table";
import { pagesPath } from "src/lib/$path";

export type DomProps = {
  styles: ReturnType<typeof getStyles>;
  breadcrumbs: BreadcrumbsProps["breadcrumbs"];
  dropdownMenu: DropdownMenuProps["menu"];
  livingExpenseItemDetail: any[];
};

const Dom = ({
  styles,
  breadcrumbs,
  dropdownMenu,
  livingExpenseItemDetail,
}: DomProps): JSX.Element => (
  <div css={styles["root"]}>
    <Breadcrumbs {...{ breadcrumbs }} />
    <div css={styles["emoji"]}>🍽</div>
    <div css={styles["title"]}>外食費</div>
    <div css={styles["explanation"]}>
      レストラン・フードデリバリーに使うお金
    </div>

    <div css={styles["detailContainer"]}>
      {/* 金額 */}
      <div css={styles["detail"]}>
        <div css={styles["detailTitle"]}>
          <span css={styles["detailTitle_text"]}>金額</span>
          <span css={styles["detailTitle_emoji"]}>💰</span>
        </div>
        <div css={styles["detailValue"]}>24000円</div>
      </div>
      {/* 内訳 */}
      <div css={styles["detail"]}>
        <div css={styles["detailTitle"]}>
          <span css={styles["detailTitle_text"]}>内訳</span>
          <span css={styles["detailTitle_emoji"]}>ℹ️</span>
        </div>
        <div css={styles["detailValue"]}>
          <Table />
        </div>
      </div>
      {/* メモ */}
      <div css={styles["detail"]}>
        <div css={styles["detailTitle"]}>
          <span css={styles["detailTitle_text"]}>メモ</span>
          <span css={styles["detailTitle_emoji"]}>📝</span>
        </div>
        <div css={styles["detailValue"]}>-</div>
      </div>
      {/* 記録 */}
      {/* <div css={styles["detail"]}>
        <div css={styles["detailTitle"]}>
          <span css={styles["detailTitle_text"]}>記録</span>
          <span css={styles["detailTitle_emoji"]}>📊</span>
        </div>
        <div css={styles["detailValue"]}>24000円</div>
      </div> */}
      {/* 最終更新日 */}
      <div css={styles["detail"]}>
        <div css={styles["detailTitle"]}>
          <span css={styles["detailTitle_text"]}>最終更新日</span>
          <span css={styles["detailTitle_emoji"]}>🕐</span>
        </div>
        <div css={styles["detailValue"]}>2022年4月1日</div>
      </div>
    </div>
  </div>
);

export default Dom;
