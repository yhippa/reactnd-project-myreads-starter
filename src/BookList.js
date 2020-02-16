import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class BookList extends Component {
    render() {
        const { books, shelves } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map(shelf => <Bookshelf books={books} shelf={shelf} shelves={shelves}/>)}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Search for a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BookList