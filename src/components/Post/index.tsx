//CSS
import styles from "./styles.module.css";

// Date FNS
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// Components
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

// React
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

// Post Function Component
export function Post({ author, publishedAt, content }: PostProps) {
  // Date Formatter
  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedDistanceToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  // Create new Comment
  const [comments, setComments] = useState(["Post muito bacana hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments(state => [...state, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  // Delete Comment
  function deleteComment(commentToDelete: string) {
    const commentsWhitoutDeleted = comments.filter(
      comment => commentToDelete !== comment
    );
    setComments(commentsWhitoutDeleted);
  }

  // Comment Invalid
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  // Imput Empty?
  const isNewCommentTextEmpty = newCommentText.trim().length === 0;

  return (
    <article className={styles.post}>
      {/* Post Author */}
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt={`${author.name} user avatar`} />

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
              return <p key={line.content}>{line.content}</p>;
            case "link":
              return (
                <p key={line.content}>
                  <a href={line.content}>{line.content}</a>
                </p>
              );
          }
        })}
      </div>

      {/* Post Comment */}
      <form className={styles.comment} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentTextEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      {/* Comments List */}
      <div className={styles.commentsList}>
        {comments.map(comment => (
          <Comment
            content={comment}
            key={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
