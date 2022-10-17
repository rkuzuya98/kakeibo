import { useCallback, useRef, useState } from "react";

/** 開閉エリアの値と処理を内包するフック */
export const useExpandArea = () => {
  /** 開閉エリアの参照 */
  const expandAreaRef = useRef<HTMLDivElement>(null);

  /** 開閉エリアの状態 */
  const [expanded, setExpanded] = useState<boolean>(false);

  /** 開閉エリアの状態の更新 */
  const toggleExpanded = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  /** 開閉エリアの高さ */
  const expandAreaHeight = expandAreaRef.current?.scrollHeight ?? 0;

  return {
    expandAreaRef,
    expanded,
    toggleExpanded,
    expandAreaHeight,
  };
};
