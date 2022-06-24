//CSS
import styles from "./styles.module.css";

// Components
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

// Post Function Component
export function Post() {
  return (
    <article className={styles.post}>
      {/* Post Author */}
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/eduardoaguiars.png" />

          <div className={styles.authorInfo}>
            <strong>Eduardo Aguiar</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio às 8:13AM" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      {/* Post Content */}
      <div className={styles.content}>
        <p>Fala Galera!</p>
        <p>
          Acabei de subir mais um projeto no meu Github. É um projeto que fiz no
          NLW.
        </p>
        <p>
          <a href="#">EduardoAguiarS GitHub</a>
        </p>
        <p>
          <a href="#">#newproject</a> <a href="#">#nlw</a>
        </p>
      </div>

      {/* Post Comment */}
      <form className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      {/* Comments List */}
      <div className={styles.commentsList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
