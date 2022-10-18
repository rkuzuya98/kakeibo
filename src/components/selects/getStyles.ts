import { css } from "@emotion/react";

export const getStyles = () => {
  return {
    root: css`
      position: relative;
    `,
    portal: css``,
    content: css`
      background-color: white;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #eee;
      /* width: 100px; */
    `,
    viewport: css`
      /* display: flex;
      flex-direction: column;
      gap: 8px; */
    `,
    item: css`
      padding: 8px;
      /* 三点リーダー対応 */
      /* display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1; */
      &:hover {
        background-color: yellow;
      }
    `,
    itemText: css`
      /* 三点リーダー対応 */
      /* display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1; */
    `,
  };
};
