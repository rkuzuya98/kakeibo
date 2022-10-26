import { css } from "@emotion/react";
import _Content, { ContentProps } from "../content";
import _Footer from "../footer";
import _Header from "../header";
import { getStyles } from "./styles";
import _AppBar, { AppBarProps } from "@/components/layouts/appBar";

// 以下のように使用する
// import * as Layout from "@/components/layouts"
export const Root = (props: { children: React.ReactNode }): JSX.Element => {
  const styles = getStyles();

  return <div css={styles["root"]} {...props} />;
};

export const AppBar = (props: AppBarProps): JSX.Element => (
  <_AppBar {...props} />
);

export type HeaderProps = {
  fixed?: boolean;
};

export const Header = ({ fixed = false }: HeaderProps): JSX.Element => {
  const styles = getStyles(fixed);
  return <_Header css={styles["header"]} />;
};

export const Content = (props: ContentProps) => {
  const styles = getStyles();

  return <_Content css={styles["content"]} {...props} />;
};

export const Footer = () => {
  const styles = getStyles();
  return (
    <>
      <div css={styles["spaceAboveFooter"]} />
      <_Footer />
    </>
  );
};
