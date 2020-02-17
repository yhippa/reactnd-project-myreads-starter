import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
    render() {
        const { books, shelf, shelves, changeShelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.label}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(book => book.shelf === shelf.key).map(book => <Book changeShelf={changeShelf} key={book.id} shelves={shelves} book={book}/>)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf
