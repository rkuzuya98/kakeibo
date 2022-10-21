import { css } from "@emotion/react";
import { theme } from "src/styles/theme";
import { spaces } from "src/styles/theme/spaces";

export const getStyles = () => {
  return {
    root: css`
      text-align: start;
      /* background-color: ${theme.colors.green50}; */
      background-color: white;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border: 1px solid ${theme.colors.green200};
      border: 1px solid ${theme["colors"]["neutral100"]};
      border: 1px solid ${theme["colors"]["neutral100"]};
      /* border: none; */
      border-radius: 8px;
      padding: ${theme.spaces.base}px;
      gap: ${theme.spaces.base}px;
      cursor: pointer;
    `,
    emoji: css`
      font-size: 40px;
      background-color: white;
      height: 70px;
      min-width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: 1px solid ${theme["colors"]["neutral100"]}; */
      /* border: 1px solid ${theme["colors"]["neutral200"]}; */
      /* border: 1px solid ${theme.colors.green50}; */
      border-radius: 8px;
      /* background-color: ${theme["colors"]["neutral50"]}; */
    `,

    texts: css`
      width: 100%;
    `,

    title: css`
      /* font-weight: 600; */
      margin-top: 4px;
      color: ${theme.colors.green800};
      font-size: 16px;
    `,
    price: css`
      margin-top: 4px;
      /* font-weight: 600; */
      font-size: 16px;
    `,
    divider: css`
      margin-top: 4px;
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.neutral200};
    `,
    note: css`
      margin-top: 4px;
      /* font-weight: 600; */
      font-size: 12px;
      color: ${theme.colors.neutral400};
    `,
    arrowRightIcon4Wrapper: css`
      align-self: center;
      margin-right: 8px;
      margin-left: 16px;
      /* min-width: 40px; */
      /* background-color: red; */
    `,
    arrowRightIcon4: css`
      width: 10px;
      height: 10px;
      & path {
        fill: ${theme["colors"]["neutral400"]};
        outline: ${theme["colors"]["neutral400"]};
      }
    `,
  };
};
