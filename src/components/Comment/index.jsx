//CSS
import styles from "./styles.module.css";

//Phosphor-React Components
import { ThumbsUp, Trash } from "phosphor-react";

// Components
import { Avatar } from "../Avatar";

// React
import { useState } from "react";

// Comment Function Component
export function Comment({ content, onDeleteComment }) {
  // Handle Delete Comment
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  // Like Count
  const [likeCount, setLikeCount] = useState(0);
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/eduardoaguiars.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Eduardo Aguiar</strong>
              <time title="11 de maio às 8:13AM" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
