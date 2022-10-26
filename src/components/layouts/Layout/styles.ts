import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const getStyles = (fixed = false) => {
  return {
    root: css`
      display: flex;
      flex-direction: column;
      height: 100vh;
    `,

    header: css`
      ${fixed} && {
        position: sticky;
        top: 0;
      }
      /* ${fixed} {
      position: fixed;
      background-color: red;
    } */
    `,

    content: css`
      /* height: 100%; */
      background-color: ${theme.colors.green50};
    `,

    spaceAboveFooter: css`
      height: 100%;
      background-color: red;
    `,
  };
};
