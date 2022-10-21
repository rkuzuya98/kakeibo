import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Dom from "./Dom";
import { getStyles } from "./getStyles";

export type AppBarProps = {
  className?: string;
  pageTitle?: string;
  ActionButton?: React.ReactNode;
};

const AppBar = ({
  className,
  pageTitle = "appBar",
  ActionButton = <></>,
}: AppBarProps): JSX.Element => {
  /** 左・中央・右の内「左」の要素の横幅値 */
  const [leftElWidth, setLeftElWidth] = useState<number>(0);
  /** 左・中央・右の内「右」の要素の横幅値 */
  const [rightElWidth, setRightElWidth] = useState<number>(0);

  /** 左・中央・右の内「左」の要素の参照 */
  const leftAppBarEl = useRef<HTMLDivElement>(null);
  /** 左・中央・右の内「右」の要素の参照 */
  const rightAppBarEl = useRef<HTMLDivElement>(null);

  /** 左・中央・右の内「左」の要素のDOM読込完了時 */
  useEffect(() => {
    if (leftAppBarEl.current) {
      setLeftElWidth(leftAppBarEl.current.clientWidth);
    }
  }, [leftAppBarEl]);
  /** 左・中央・右の内「右」の要素のDOM読込完了時 */
  useEffect(() => {
    if (rightAppBarEl.current) {
      console.log(rightAppBarEl.current.clientWidth);
      console.log(rightAppBarEl.current.offsetWidth);
      setRightElWidth(rightAppBarEl.current.clientWidth);
    }
  }, [rightAppBarEl]);

  const styles = useMemo(
    () => getStyles(rightElWidth, leftElWidth),
    [rightElWidth, leftElWidth]
  );

  return (
    <Dom
      {...{
        className,
        styles,
        pageTitle,
        ActionButton,
        leftAppBarEl,
        rightAppBarEl,
      }}
    />
  );
};

export default AppBar;
