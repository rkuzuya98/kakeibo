import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,

  content: css`
    height: 100%;
    background-color: ${theme.colors.green50};
  `,
};
