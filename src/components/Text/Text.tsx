import { PropsWithChildren } from "react";

import styles from "./Text.module.css";

export default function Text({ children }: PropsWithChildren) {
  return <span className={styles.text}>{children}</span>;
}
