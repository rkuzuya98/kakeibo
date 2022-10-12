import { getStyles } from "./getStyles";

export type AppBarProps = {
  title?: string;
};

const AppBar = ({ title = "appBar" }: AppBarProps): JSX.Element => {
  const styles = getStyles();
  return <div css={styles["root"]}>{title}</div>;
};

export default AppBar;
