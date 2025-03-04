import Book from "./Components";
import Events from "./Hooks";

import "./base.css";
const BookLists = () => (
  <main>
    <Events />
    {new Array(12).fill({ Title: "Title", Author: "Name" }).map((_, index) => (
      <Book key={index} {..._} />
    ))}
  </main>
);

export default BookLists;
