import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-cliffs-10475.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container">
      {/* search field */}
      <form className="col-md-6 m-auto py-5">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Book"
          />
          <div className="input-group-append">
            <button type="button" className="btn button">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-md-12 justify-content-center">
          <div className="row justify-content-center">
            {books.length === 0 && (
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden"></span>
              </div>
            )}
            {books.map((book) => (
              <Book key={book._id} book={book}></Book>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
