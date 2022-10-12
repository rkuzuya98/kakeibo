import { css } from "@emotion/react";
import { getStyles } from "./getStyles";

const AppBar = () => {
  const styles = getStyles();
  return <div css={styles["root"]}>appBar</div>;
};

export default AppBar;
