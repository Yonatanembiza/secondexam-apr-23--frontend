// AddBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [formData, setFormData] = useState({
    isbn: '',
    title: '',
    price: '',
    category: {
      id: '',
      name: '',
    },
    authors: [
      {
        id: '',
        name: '',
      },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    // If the field is in the nested structure (category or authors), update accordingly
    setFormData((prevData) => ({
      ...prevData,
      [name]: typeof prevData[name] === 'object' ? { ...prevData[name], [name]: value } : value,
    }));
  };

  const handleCategoryIdChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      category: {
        ...prevData.category,
        id: value,
      },
    }));
  };

  const handleCategoryNameChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      category: {
        ...prevData.category,
        name: value,
      },
    }));
  };

  const handleAuthorsChange = (event) => {
    const value = event.target.value;
    const authorsArray = value.split(' ').map((authorName) => ({ id: '', name: authorName }));
    setFormData((prevData) => ({ ...prevData, authors: authorsArray }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send data to the server using a POST request
    fetch('http://localhost:5001/api/v1/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        console.log('Book added successfully');
        // Navigate to the Books page
        navigate('/books');
      })
      .catch((error) => console.error('Error adding book:', error));
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ISBN:
          <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} required />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Category ID:
          <input type="text" name="category.id" value={formData.category.id} onChange={handleCategoryIdChange} required />
        </label>
        <label>
          Category Name:
          <input type="text" name="category.name" value={formData.category.name} onChange={handleCategoryNameChange} required />
        </label>
        <label>
          Authors:
          <input type="text" name="authors" value={formData.authors.map((author) => author.name).join(' ')} onChange={handleAuthorsChange} required />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
