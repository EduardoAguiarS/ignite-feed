// Components
import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

// CSS
import "./styles/global.css";
import styles from "./styles/App.module.css";

// App Function Component
export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post content="Hello World" author="John Doe" />
          <Post content="lorem ipsum" author="Jane Doe" />
        </main>
      </div>
    </>
  );
}
