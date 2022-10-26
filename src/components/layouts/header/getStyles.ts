import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const getStyles = () => {
  return {
    root: css`
      z-index: 100;
      background-color: white;
      box-shadow: 1px 1px #ddd;
      min-height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: ${theme.spaces.base * 2}px;
      padding: 0 ${theme.spaces.base * 2}px;
    `,

    emoji: css`
      font-size: 40px;
    `,

    title: css`
      width: 100%;
      /* text-align: end; */
      font-size: 18px;
      font-weight: bold;
      /* background-color: red; */
    `,

    dropdownMenuWrapper: css`
      /* position: absolute;
right: 0;
top: 0; */
    `,
  };
};
