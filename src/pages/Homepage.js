// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>

      <ul className="list">
        <li className="i-one">
          <Link to="/books">Books</Link>
        </li>
        <li className="i-two">
          <Link to="/addbook">Add Book</Link>
        </li>
        <li className="i-three">
          <Link to="/selectedbooks">Selected Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
