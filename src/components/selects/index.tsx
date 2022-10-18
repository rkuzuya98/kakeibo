import { css } from "@emotion/react";
import * as RedixSelect from "@radix-ui/react-select";
import { HouseIcon2 } from "../icons";
import { getStyles } from "./getStyles";

export type SelectProps = {
  options: {
    value: string;
    text: string;
  }[];
  onValueChange: () => void;
};

const Select = ({ options, onValueChange }: SelectProps): JSX.Element => {
  const styles = getStyles();

  return (
    <RedixSelect.Root onValueChange={onValueChange}>
      <RedixSelect.Trigger>
        <RedixSelect.Value />

        <RedixSelect.Icon />
      </RedixSelect.Trigger>
      <RedixSelect.Portal css={styles["portal"]}>
        <RedixSelect.Content css={styles["content"]}>
          <RedixSelect.ScrollUpButton />

          <RedixSelect.Viewport css={styles["viewport"]}>
            {options.map((option, index) => (
              <RedixSelect.Item
                key={index}
                value={option.value}
                css={styles["item"]}
              >
                <RedixSelect.ItemText css={styles["itemText"]}>
                  {option.text}
                </RedixSelect.ItemText>
                <RedixSelect.ItemIndicator>
                  <HouseIcon2 />
                </RedixSelect.ItemIndicator>
              </RedixSelect.Item>
            ))}
          </RedixSelect.Viewport>

          <RedixSelect.ScrollDownButton />
        </RedixSelect.Content>
      </RedixSelect.Portal>
    </RedixSelect.Root>
  );
};
export default Select;
