import React from 'react'

const Book = (props) => {

    return (
        <div className="Content" onClick={props.clicked}>
            <p>{props.title}</p>
            <div className="Info">
                <br/>
                <div className="Author">{props.price}$</div>
            </div>
        </div>
    );
}

export default Book