import Text from "../Text/Text";
import styles from "./Badge.module.css";

export type BadgeVariant = "neutral" | "positive" | "negative";

export default function Badge(
  props: { variant: BadgeVariant; children?: string } = {
    variant: "neutral",
  },
) {
  const { variant, children } = props;
  return (
    <span className={`${styles.badge} && ${styles[`badge--${variant}`]}`}>
      <Text>{children}</Text>
    </span>
  );
}
