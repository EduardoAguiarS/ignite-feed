// Components
import { Header } from "./components/Header";
import { Post } from "./Post";

// CSS
import "./styles/global.css";
import styles from "./styles/App.module.css";

// App Function Component
export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post content="Hello World" author="John Doe" />
          <Post content="lorem ipsum" author="Jane Doe" />
        </main>
      </div>
    </>
  );
}
