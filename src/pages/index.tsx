import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { pagesPath } from "../lib/$path";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <div>お知らせ</div>
      <div>総資産</div>
      <div>2022年11月分を記録する</div>
      <button
        onClick={() => {
          router.push(pagesPath.expense.regular.$url());
        }}
      >
        定期出費
      </button>
      <button
        onClick={() => {
          router.push(pagesPath.expense.special.$url());
        }}
      >
        特別出費
      </button>
      <div>定期収入</div>
      <div>特別収入</div>
    </div>
  );
};

export default Home;
