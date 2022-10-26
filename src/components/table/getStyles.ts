import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const getStyles = () => {
  return {
    table: css`
      font-size: 14px;
      border-spacing: 0;
      border-collapse: collapse;
      width: 100%;
    `,

    th: css`
      border: 1px solid ${theme.colors.neutral300};
      padding: 4px 8px;
      margin: 0;
      /* width: auto; */
      &:first-child {
        /* width: 100%; */
      }
      &:not(:first-child) {
        white-space: nowrap;
      }
      /* white-space: nowrap; */
    `,
    td: css`
      border: 1px solid ${theme.colors.neutral300};
      padding: 4px 8px;
      margin: 0;
      &:not(:first-child) {
        white-space: nowrap;
      }
    `,
  };
};
