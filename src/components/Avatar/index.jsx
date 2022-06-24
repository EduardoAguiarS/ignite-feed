// CSS
import styles from "./styles.module.css";

// Avatar Function Component
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="Avatar"
    />
  );
}
