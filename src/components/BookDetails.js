// BookDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/v1/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    await fetch(`http://localhost:5001/api/v1/books/${id}`, {
      method: 'DELETE',
    });

    navigate('/books');
  };

  const handleSelect = () => {
    setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, book]);
  };

  const handleUnselect = () => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.filter((selectedBook) => selectedBook.id !== book.id)
    );
  };

  return (
    <div>
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <p>ISBN: {book.isbn}</p>
          <p>Price: {book.price}</p>
          {/* Check if 'authors' exists before accessing it */}
          <p>Authors: {book.authors ? book.authors.join(', ') : 'N/A'}</p>

          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleSelect}>Select</button>
          <button onClick={handleUnselect}>Unselect</button>
          <button onClick={() => navigate('/books')}>Back</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
