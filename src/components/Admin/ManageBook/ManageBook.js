import React, { useEffect, useState } from "react";
import DeleteIcon from "../../../icons/delete.png";
import "./ManageBook.css";

const ManageBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-cliffs-10475.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // handle delete
  const handleDelete = (id) => {
    fetch(`https://murmuring-cliffs-10475.herokuapp.com/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Delete successfully.");
      });
  };
  return (
    <div className="container">
      <h3 className="mt-2">Mangae Books</h3>
      <p className="fw-bold">Total Books collection : {books.length}</p>
      <table className="table table-hover table-borderless mt-3">
        <thead>
          <tr className="bookHeading">
            <th scope="col"></th>
            <th scope="">Book Name</th>
            <th scope="">Book Image</th>
            <th scope="">Author</th>
            <th scope="">Price</th>
            <th scope="">Action</th>
          </tr>
        </thead>
        {books.map((book) => (
          <tbody key={book._id}>
            <tr>
              <th scope="row"></th>
              <td>{book.bookName}</td>
              <td>
                <img style={{ width: "30px" }} src={book.imgURL} alt="" />
              </td>
              <td>{book.authorName}</td>
              <td>${book.price}</td>
              <td>
                <img
                  onClick={() => handleDelete(book._id)}
                  className="deleteIcon"
                  src={DeleteIcon}
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageBook;
