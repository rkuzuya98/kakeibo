import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const getStyles = () => {
  return {
    root: css`
      background-color: ${theme.colors.green50};
      padding: 16px 8px;
    `,
  };
};
