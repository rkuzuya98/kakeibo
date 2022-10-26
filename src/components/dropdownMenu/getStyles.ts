import { css } from "@emotion/react";
import { theme } from "src/styles/theme";
import { spaces } from "src/styles/theme/spaces";

export const getStyles = () => {
  return {
    root: css``,

    trigger: css`
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
    `,

    horizontalEllipsisIcon1: css`
      fill: black;
    `,

    content: css`
      background-color: white;
      width: 120px;
      border: 1px solid ${theme.colors.neutral200};
      padding: ${theme.spaces.base}px;
      border-radius: ${theme.spaces.base}px;
    `,

    ul: css`
      padding: 0;
      margin: 0;
    `,

    li: css`
      list-style: none;
      &:not(:last-child) {
        border-bottom: 1px solid ${theme.colors.neutral200};
      }
    `,

    button: css`
      width: 100%;
      border-radius: none;
      background-color: white;
      border: none;
      font-size: 16px;
      padding: ${spaces.base * 1.5}px 0;
    `,
  };
};
