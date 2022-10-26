import { getStyles } from "./getStyles";

const Table = () => {
  const styles = getStyles();

  return (
    <table css={styles["table"]}>
      <thead>
        <tr>
          <th css={styles["th"]}>項目名</th>
          <th css={styles["th"]}>単価</th>
          <th css={styles["th"]}>人数</th>
          <th css={styles["th"]}>回数</th>
          <th css={styles["th"]}>合計額</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td css={styles["td"]}>飲食代飲食代飲食代飲食代飲食代</td>
          <td css={styles["td"]}>1500円</td>
          <td css={styles["td"]}>2人</td>
          <td css={styles["td"]}>8回</td>
          <td css={styles["td"]}>24000円</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
