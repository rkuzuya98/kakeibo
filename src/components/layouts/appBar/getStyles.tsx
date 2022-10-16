import { css } from "@emotion/react";

export const getStyles = (rightElWidth: number, leftElWidth: number) => {
  const sideElWidth = Math.max(rightElWidth, leftElWidth);

  const sidePartStyle = css`
    flex-shrink: 0;
    display: flex;
    min-width: ${sideElWidth}px;
  `;
  console.log({ sideElWidth });

  return {
    root: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 0 16px;
      box-shadow: 1px 1px #ccc;
    `,

    leftPart: css`
      ${sidePartStyle}
      justify-content: flex-start;
      /* background-color: lightblue; */
    `,

    centerPart: css`
      /* flex-shrink: 0; */
      padding: 0 8px;
      /* background-color: lightgray; */
      width: 100%;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      /* 三点リーダー対応 */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
    `,

    rightPart: css`
      ${sidePartStyle}
      justify-content: flex-end;
      /* background-color: pink; */
    `,

    sidePartContent: css`
      padding: 0 8px;
      /* background-color: red; */
      display: inline-flex;
    `,
  };
};
