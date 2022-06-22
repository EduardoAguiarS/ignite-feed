// CSS
import styles from "./index.module.css";

// Assets
import IgniteLogo from "../../assets/ignite-logo.svg";

// Header Function Component
export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logotipo do Ignite" />
      <span>Ignite Feed</span>
    </header>
  );
}