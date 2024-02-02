// Books.js
import React, { useState, useEffect } from 'react';
import Book from './Book';
import { useNavigate } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState({
    category: '',
    title: '',
    minPrice: '',
    maxPrice: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/v1/books?category=${filter.category}&title=${filter.title}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}`);
        const data = await response.json();
        setBooks(data);
        // console.log(data[0].isbn)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filter]);

  const handleBookClick = (id) => {
    navigate(`/books/${id}`);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Trigger a new fetch with the updated filter criteria
      const response = await fetch(`http://localhost:5001/api/v1/books?category=${filter.category}&title=${filter.title}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}`);
      const data = await response.json();
      setBooks(data);  // Update the books state with the filtered data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <form onSubmit={handleFilterSubmit}>
        <label>
          Category:
          <input type="text" name="category" value={filter.category} onChange={handleFilterChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={filter.title} onChange={handleFilterChange} />
        </label>
        <label>
          Min Price:
          <input type="text" name="minPrice" value={filter.minPrice} onChange={handleFilterChange} />
        </label>
        <label>
          Max Price:
          <input type="text" name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} />
        </label>
        <button type="submit">Filter</button>
      </form>

      {Array.isArray(books) && books.map((book) => (
        <Book key={book.isbn} id={book.isbn} title={book.title} price={book.price} clicked={() => handleBookClick(book.ISBN)} />
      ))}
    </div>
  );
};

export default Books;
