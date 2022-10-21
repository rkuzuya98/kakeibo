import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import { getStyles } from "./getStyles";
import { HouseIcon2 } from "@/components/icons";

export type DomProps = {
  className?: string;
  styles: ReturnType<typeof getStyles>;
  pageTitle: string;
  ActionButton: React.ReactNode;
  leftAppBarEl: RefObject<HTMLDivElement>;
  rightAppBarEl: RefObject<HTMLDivElement>;
};

const Dom = ({
  className,
  styles,
  pageTitle,
  ActionButton,
  leftAppBarEl,
  rightAppBarEl,
}: DomProps): JSX.Element => (
  <div css={styles["root"]} className={className}>
    {/* 左・中央・右の内「左」の要素 */}
    <div ref={leftAppBarEl} css={styles["leftPart"]}>
      <div css={styles["sidePartContent"]}>
        <HouseIcon2 />
      </div>
    </div>

    {/* 左・中央・右の内「中央」の要素 */}
    <div css={styles["centerPart"]}>{pageTitle}</div>

    {/* 左・中央・右の内「右」の要素 */}
    <div ref={rightAppBarEl} css={styles["rightPart"]}>
      <div css={styles["sidePartContent"]}>{ActionButton}</div>
    </div>
  </div>
);

export default Dom;
