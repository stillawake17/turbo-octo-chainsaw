import React from 'react';
import bookData from '../bookData.json';

function Book() {

    return (
        <div className="book-gallery">
          {bookData.map((book) => (
            <div className="book" key={book.id}>
              <img src={book.imageUrl} alt={book.title} />
              <div className="overlay">
                <h3>{book.title}</h3>
              </div>
            </div>
          ))}
        </div>
      );
    }


export default Book;