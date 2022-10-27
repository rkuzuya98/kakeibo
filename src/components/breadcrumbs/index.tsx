import Link from "next/link";
import { useId } from "react";
import { HouseIcon2 } from "../icons";
import { getStyles } from "./getStyles";

export type BreadcrumbsProps = {
  breadcrumbs: {
    text: string;
    href: string | null;
  }[];
};

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps): JSX.Element => {
  const id = useId();
  const styles = getStyles();

  return (
    <div css={styles["root"]}>
      <HouseIcon2 css={styles["houseIcon2"]} />
      {breadcrumbs.map((breadcrumb) => (
        <div key={`${id}_${breadcrumb}`} css={styles["breadcrumb"]}>
          <div css={styles["gt"]}>&gt;</div>
          {breadcrumb.href ? (
            <Link href={breadcrumb.href} passHref>
              <a css={styles["text"]}>{breadcrumb.text}</a>
            </Link>
          ) : (
            <div css={styles["text"]}>{breadcrumb.text}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
