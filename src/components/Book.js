// Book.js
import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
    const x = console.log(props);
  return (
    <div>
        <p>{x}</p>
        <Link to={`/books/${props.id}`}>
        <div className="Content">
            <p>{props.title}</p>
            <div className="Info">
            <br />
            <div className="Author">{props.price}$</div>
            </div>
        </div>
        </Link>
    </div>
  );
};

export default Book;
