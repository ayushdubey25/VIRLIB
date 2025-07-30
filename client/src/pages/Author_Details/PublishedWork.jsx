import React from "react";
import "../../Styling/Published_work.css";
import sampleCover from "../../assets/Images/virlib_logo.png";

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="book-card">
      <img
        src={book.cover || sampleCover}
        alt={book.title}
        className="book-cover-image"
        width="140"
        height="180"
      />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        <p>
          <strong>Pages:</strong> {book.pages}
        </p>

        {book.pdf && (
          <a
            href={book.pdf}
            download={`${book.title}.pdf`}
            className="download-link"
          >
            📥 Download PDF
          </a>
        )}

        <button onClick={() => onDelete(book._id)} className="delete-button">
          🗑 Delete Book
        </button>
      </div>
    </div>
  );
};

const PublishedWork = ({ books = [], onDelete }) => {
  return (
    <div className="published-container">
      {books.length === 0 ? (
        <div className="no-books-msg">
          No books published yet.
          <br /> It's your sign to begin your Literary Journey :) <br />
          <br /> <br />
          <strong>Coming soon: Your literary legacy!</strong>
        </div>
      ) : (
        books.map((book, index) => (
          <BookCard key={index} book={book} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default PublishedWork;
