import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />
      <Post content="Hello World" author="John Doe" />
      <Post content="lorem ipsum" author="Jane Doe" />
    </>
  );
}
