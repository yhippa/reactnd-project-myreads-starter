import React, { Component } from 'react';
import ChangeShelf from './ChangeShelf'

class Book extends Component {
    render() {
        const { book, shelves, changeShelf } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: '100%', height: '100%', backgroundImage:`url(${book.imageLinks.smallThumbnail})` }}></div>
                        <ChangeShelf book={book} changeShelf={changeShelf} shelves={shelves}/>                        
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(", ") : ''}</div>
                </div>
            </li>
        )
    }
}

export default Book