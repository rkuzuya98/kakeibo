import { useRouter } from "next/router";
import Dom from "./Dom";
import { getStyles } from "./getStyles";
import { DropdownMenuProps } from "@/components/dropdownMenu";
import { pagesPath } from "src/lib/$path";

const livingExpenseItemDetail = [
  {
    label: "内訳",
    value: "レストラン・フードデリバリーに使うお金",
  },
  {
    label: "メモ",
    value: "レストラン・フードデリバリーに使うお金",
  },
  {
    label: "添付ファイル",
    value: "-",
  },
  {
    label: "最終更新日",
    value: "2022年4月8日",
  },
  {
    label: "過去データ",
    value: "2022年4月8日",
  },
];

const LivingExpenseItemDetail = () => {
  const router = useRouter();

  const styles = getStyles();

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
    <Dom
      {...{
        styles,
        dropdownMenu,
        livingExpenseItemDetail,
      }}
    />
  );
};

export default LivingExpenseItemDetail;
