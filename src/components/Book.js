import React from 'react';
import bookData from '../bookData.json';
import PayPalButton from './PayPalButton'; // make sure this path is correct

function Book() {
    return (
        <div className="book-gallery">
          {bookData.map((book) => (
            <div className="book" key={book.id}>
              {/* <img src={book.imageUrl} alt={book.title} /> */}
              <img src={process.env.PUBLIC_URL + book.imageUrl} alt={book.title} />

              <div className="overlay">
                <h3>{book.title}</h3>
                
              </div>
             
            </div>
          ))}
           <PayPalButton /> {/* Render the PayPalButton component */}
        </div>
      );
}

export default Book;
