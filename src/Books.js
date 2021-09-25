// import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

export default function Books() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  function handlechange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handlesubmit(event) {
    event.preventDefault();

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + book+ "&maxResults=40")
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items)
      });
  }
  return (
    <div class="container">
      <h1>Search for books__Only</h1>
      <form onSubmit={handlesubmit}>
        <div className="my-2">
          <input
            type="text"
            onChange={handlechange}
            className="form-control my-4"
            placeholder="search for books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger my-8">
          Search
        </button>
      </form>

      {result.map(i => (
          <a href={i.volumeInfo.previewLink} target="_blank">
        <img src={i.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
        </a>
      )) }
    </div>
  );
}
