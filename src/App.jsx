import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <>
      <Post content="Hello World" author="John Doe" />
      <Post content="lorem ipsum" author="Jane Doe" />
    </>
  );
}
