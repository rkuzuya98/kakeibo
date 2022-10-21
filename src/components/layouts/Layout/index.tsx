import { css } from "@emotion/react";
import _Content, { ContentProps } from "../content";
import _Footer from "../footer";
import { styles } from "./styles";
import _AppBar, { AppBarProps } from "@/components/layouts/appBar";

// 以下のように使用する
// import * as Layout from "@/components/layouts"
export const Root = (props: { children: React.ReactNode }): JSX.Element => (
  <div css={styles["root"]} {...props} />
);
export const AppBar = (props: AppBarProps): JSX.Element => (
  <_AppBar {...props} />
);
export const Content = (props: ContentProps) => (
  <_Content css={styles["content"]} {...props} />
);
export const Footer = () => <_Footer />;
