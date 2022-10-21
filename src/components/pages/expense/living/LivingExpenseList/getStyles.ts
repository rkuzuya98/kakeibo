import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const getStyles = () => {
  return {
    root: css`
      display: flex;
      flex-direction: column;
      gap: ${theme.spaces.base / 2}px;
    `,
  };
};
