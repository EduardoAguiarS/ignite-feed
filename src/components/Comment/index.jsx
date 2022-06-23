//CSS
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.css";

// Comment Function Component
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/eduardoaguiars.png" alt="avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Eduardo Aguiar</strong>
              <time title="11 de maio às 8:13AM" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
