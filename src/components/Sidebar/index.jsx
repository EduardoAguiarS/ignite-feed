// CSS
import styles from "./styles.module.css";

// Phosphor-React
import { PencilLine } from "phosphor-react";

// Components
import { Avatar } from "../Avatar";

// Sidebar Function Component
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt="cover image"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/eduardoaguiars.png" />

        <strong>Eduardo Aguiar</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
