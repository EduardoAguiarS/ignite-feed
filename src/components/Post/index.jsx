//CSS
import styles from "./styles.module.css";

// Date FNS
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// Components
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import { useState } from "react";

// Post Function Component
export function Post({ author, publishedAt, content }) {
  // Date Formatter
  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedDistanceToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  // Create new Comment

  const [comments, setComments] = useState([1, 2]);

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, comments.length + 1]);
  }

  return (
    <article className={styles.post}>
      {/* Post Author */}
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDistanceToNow}
        </time>
      </header>

      {/* Post Content */}
      <div className={styles.content}>
        {content.map(line => {
          switch (line.type) {
            case "paragraph":
              return <p>{line.content}</p>;
            case "link":
              return (
                <p>
                  <a href={line.content}>{line.content}</a>
                </p>
              );
          }
        })}
      </div>

      {/* Post Comment */}
      <form className={styles.comment} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      {/* Comments List */}
      <div className={styles.commentsList}>
        {comments.map(comment => (
          <Comment />
        ))}
      </div>
    </article>
  );
}
