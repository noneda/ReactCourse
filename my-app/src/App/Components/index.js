import "./base.css";

const Book = (props) => {
  return (
    <article>
      <h1>{props.Title}</h1>
      <h4>{props.Author}</h4>
    </article>
  );
};

export default Book;
