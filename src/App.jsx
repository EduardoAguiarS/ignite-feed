// Components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// CSS
import "./styles/global.css";
import styles from "./styles/App.module.css";

// Posts
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/eduardoaguiars.png",
      name: "Eduardo Aguiar",
      role: "Front-end Developer"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala Galera!"
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu Github. É um projeto que fiz no NLW."
      },
      {
        type: "link",
        content: "https://github.com/eduardoaguiars"
      }
    ],
    publishedAt: new Date("2022-06-25 08:13:30")
  }, // Post 1
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala Galera!"
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu Github. É um projeto que fiz no NLW."
      },
      {
        type: "link",
        content: "https://github.com/diego3g"
      }
    ],
    publishedAt: new Date("2022-06-26 10:13:30")
  } // Post 2
];

// App Function Component
export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
