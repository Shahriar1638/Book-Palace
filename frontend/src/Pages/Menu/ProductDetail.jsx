import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { bookId } = useParams(); // Get the bookId from the URL
  const [book, setBook] = useState(null); // To store the book data
  const [loading, setLoading] = useState(true); // To show a loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    // Fetch the book details from the backend API
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`bookCollection.json${bookId}`);
        const data = await response.json();
        
      } catch (error) {
        setError('Failed to fetch book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]); // Dependency on bookId to re-fetch if the ID changes

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error if any

  return (
    <div>
      {book ? (
        <div className="product-detail">
          <img src={book.bookImage} alt={book.bookTitle} />
          <h2>{book.bookTitle}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>ISBN: {book.ISBN}</p>
          <p>Published: {book.publishYear}</p>
          <p>Price: ${book.price}</p>
          <p>Rating: {book.rating}</p>
          <p>Recommendations: {book.recommend}</p>
          <p>Purchase Count: {book.purchaseCount}</p>
          {/* Add more book details as needed */}
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default ProductDetail;
