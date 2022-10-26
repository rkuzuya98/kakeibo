import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const getStyles = () => {
  return {
    root: css`
      background-color: ${theme.colors.green500};
      @media (min-width: 1024px) {
        padding: 16px 8px;
        display: flex;
        justify-content: center;
      }
    `,
    content: css`
      background-color: white;
      padding: 8px 4px;
      @media (min-width: 1024px) {
        width: 800px;
      }
    `,
  };
};
