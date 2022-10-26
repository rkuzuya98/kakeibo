import { getStyles } from "./getStyles";

export type ContentProps = {
  children: React.ReactNode;
  className?: string;
};

const Content = ({ children, className }: ContentProps): JSX.Element => {
  const styles = getStyles();

  return (
    <div className={className} css={styles["root"]}>
      <div css={styles["content"]}>{children}</div>
    </div>
  );
};

export default Content;
