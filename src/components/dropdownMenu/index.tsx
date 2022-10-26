import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { useId } from "react";
import { HorizontalEllipsisIcon1 } from "../icons";
import { getStyles } from "./getStyles";

export type DropdownMenuProps = {
  menu: {
    text: string;
    onClick: () => void;
  }[];
};

const DropdownMenu = ({ menu }: DropdownMenuProps): JSX.Element => {
  const id = useId();

  const styles = getStyles();

  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger css={styles["trigger"]}>
        <HorizontalEllipsisIcon1 css={styles["horizontalEllipsisIcon1"]} />
      </RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content css={styles["content"]}>
          <ul css={styles["ul"]}>
            {menu.map((item) => (
              <li key={`${id}_${item.text}`} css={styles["li"]}>
                <RadixDropdownMenu.Item>
                  <button onClick={item.onClick} css={styles["button"]}>
                    {item.text}
                  </button>
                </RadixDropdownMenu.Item>
              </li>
            ))}
          </ul>
          <RadixDropdownMenu.Separator />
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};

export default DropdownMenu;
