import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const getStyles = () => {
  return {
    root: css`
      /* display: flex;
      flex-direction: column;
      align-items: center; */
      background-color: white;
      padding: 16px 0px;
      /* height: 100%; */
      position: relative;
    `,

    detailContainer: css``,

    detail: css`
      padding: 24px 8px;
      &:nth-child(odd) {
        background-color: ${theme.colors.neutral50};
      }
      &:nth-child(even) {
        background-color: white;
      }
    `,

    detailTitle: css`
      margin-bottom: 12px;
    `,

    detailTitle_text: css`
      font-size: 16px;
      font-weight: bold;
    `,

    detailTitle_emoji: css`
      font-size: 20px;
      margin-left: 4px;
    `,

    detailValue: css`
      font-size: 16px;
    `,

    breadcrumbs: css`
      display: flex;
      align-items: center;
      gap: ${theme.spaces.base / 2}px;
      /* background-color: ${theme.colors.green50}; */
    `,

    dropdownMenuWrapper: css`
      position: absolute;
      right: 0;
      top: 0;
    `,

    divider: css`
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.neutral200};
      margin-bottom: ${theme.spaces.base * 4}px;
    `,

    emoji: css`
      /* background-color: white; */
      /* width: 200px;
      height: 200px; */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 100px;
      border-radius: 24px;
      margin-bottom: ${theme.spaces.base * 2}px;
      margin-top: ${theme.spaces.base * 4}px;
    `,

    title: css`
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-bottom: ${theme.spaces.base * 1}px;
    `,

    explanation: css`
      font-size: 16px;
      text-align: center;
      margin-bottom: ${theme.spaces.base * 6}px;
    `,
  };
};
