import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const getStyles = () => {
  return {
    root: css`
      display: flex;
      align-items: center;
    `,

    houseIcon2: css`
      width: 17px;
      height: 17px;
      transform: translateY(-1px);
      & path {
        fill: ${theme.colors.neutral600};
      }
    `,

    breadcrumb: css`
      display: flex;
    `,

    text: css`
      font-size: 16px;
    `,

    gt: css`
      font-size: 14px;
      transform: translateY(2px);
      padding: 0 ${theme.spaces.base}px;
    `,
  };
};
