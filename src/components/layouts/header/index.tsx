import { useRouter } from "next/router";
import { getStyles } from "./getStyles";
import DropdownMenu, { DropdownMenuProps } from "@/components/dropdownMenu";
import { pagesPath } from "src/lib/$path";

export type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps): JSX.Element => {
  const styles = getStyles();

  const router = useRouter();

  const dropdownMenu: DropdownMenuProps["menu"] = [
    {
      text: "編集",
      onClick: () => {
        router.push(pagesPath.expense.living._id("1").edit.$url());
      },
    },
    {
      text: "削除",
      onClick: () => {
        router.push(pagesPath.expense.living._id("1").edit.$url());
      },
    },
  ];

  return (
    <div className={className} css={styles["root"]}>
      <div css={styles["emoji"]}>🍽</div>
      <div css={styles["title"]}>外食費</div>
      <div css={styles["dropdownMenuWrapper"]}>
        <DropdownMenu menu={dropdownMenu} />
      </div>
    </div>
  );
};

export default Header;
