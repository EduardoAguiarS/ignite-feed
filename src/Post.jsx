export function Post(props) {
  return (
    <>
      <p>{props.content}</p>
      <strong>{props.author}</strong>
    </>
  );
}
