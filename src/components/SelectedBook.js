import React, { useState, useEffect } from 'react';

const SelectedBooks = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchSelectedBooks = async () => {
      try {
        // Replace 'http://localhost:5001/api/v1/selectedBooks' with the actual API endpoint
        const response = await fetch('http://localhost:5001/api/v1/books?filter=' + filter);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setSelectedBooks(data);
        // const response = await fetch('http://localhost:5001/api/v1/books');
        // if (!response.ok) {
        //   throw new Error(`Failed to fetch selected books. Status: ${response.status}`);
        // }

        // const data = await response.json();
        // // Assuming the API response returns an array of selected books
        // setSelectedBooks(data);
      } catch (error) {
        console.error('Error fetching selected books:', error.message);
      }
    };

    // Call the function to fetch selected books when the component mounts
    fetchSelectedBooks();
  }, []); // useEffect runs only once on component mount

  const handleUnselect = (isbn) => {
    // Remove the book with the given ISBN from the selectedBooks array
    const updatedSelectedBooks = selectedBooks.filter((book) => book.isbn !== isbn);
    setSelectedBooks(updatedSelectedBooks);
  };

  const filteredBooks = selectedBooks.filter((book) =>
    book.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Selected Books</h1>
      <input
        type="text"
        placeholder="Filter by title..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.isbn}>
            <span>{`Title: ${book.title}, ISBN: ${book.isbn}`}</span>
            <button onClick={() => handleUnselect(book.isbn)}>Unselect</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedBooks;
