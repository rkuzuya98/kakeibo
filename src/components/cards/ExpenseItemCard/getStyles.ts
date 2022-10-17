import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

const upperPartHeight = "44px";

export const getStyles = (expanded: boolean, expandAreaHeight: number) => {
  return {
    root: css`
      padding: 12px 0px 8px;
      border: 1px solid #eee;
      border-radius: 8px;
      box-shadow: 1px 1px 1px ${theme["colors"]["neutral300"]};
      background-color: ${theme["colors"]["neutral50"]};
    `,

    // 上部 ===============================================
    upperPart: css`
      display: flex;
      justify-content: space-between;
      padding: 0 12px;
      height: ${upperPartHeight};
      margin-bottom: 12px;
    `,

    upperPart_leftColumn: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    `,

    nameAndFixedCost: css`
      display: flex;
      align-items: center;
      gap: 8px;
    `,

    name: css`
      font-size: 14px;
      font-weight: bold;
      color: ${theme["colors"]["neutral600"]};
    `,

    cost: css`
      display: flex;
      align-items: flex-end;
      gap: 4px;
    `,

    cost_value: css`
      font-size: 14px;
      color: ${theme["colors"]["neutral600"]};
      transform: translateY(2px);
    `,

    cost_unit: css`
      font-size: 10px;
      color: ${theme["colors"]["neutral600"]};
    `,

    fixedCostLabel: css`
      display: inline-block;
      border: 1px solid black;
      padding: 2px 6px;
      border-radius: 4px;
      background-color: ${theme["colors"]["neutral400"]};
      color: white;
      border: none;
      font-size: 10px;
    `,

    emoji: css`
      font-size: 30px;
      background-color: white;
      height: ${upperPartHeight};
      width: ${upperPartHeight};
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme["colors"]["neutral100"]};
      border-radius: 8px;
    `,

    // 区切り線 ===============================================
    divider: css`
      width: 100%;
      height: 1px;
      margin-bottom: 8px;
      background-color: ${theme["colors"]["neutral200"]};
    `,

    centerPart: css`
      ${expanded
        ? css`
            height: ${expandAreaHeight}px;
            opacity: 1;
          `
        : css`
            height: 0px;
            opacity: 0;
          `}
      transition: all 0.2s 0s ease;
    `,

    // 下部 ===============================================
    lowerPart: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 12px;
      background-color: transparent;
      border: none;
      width: 100%;
      cursor: pointer;
    `,

    infoContainer: css`
      display: flex;
      align-items: center;
      gap: 16px;
    `,

    info: css`
      display: flex;
      align-items: center;
      gap: 2px;
    `,

    info_text: css`
      font-size: 8px;
      color: ${theme["colors"]["neutral500"]};
    `,

    info_icon: css`
      width: 10px;
      height: 10px;
      transform: translateY(0.5px);
      & path {
        fill: ${theme["colors"]["neutral500"]};
        outline: ${theme["colors"]["neutral500"]};
      }
    `,

    toggleIcon: css`
      width: 10px;
      height: 10px;
      & path {
        fill: ${theme["colors"]["neutral400"]};
        outline: ${theme["colors"]["neutral400"]};
      }
      transform: rotate(${expanded ? "180deg" : "0"});
      transition: all 0.4s 0s ease;
    `,
  };
};
