import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            searchTerm: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        (event.target.value) ? BooksAPI.search(event.target.value).then(books => this.setState({books})) : console.log()
    }

    render() {
        const { changeShelf, shelves } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" value={this.searchTerm} onChange={this.handleChange} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 ? this.state.books.map(book => <Book changeShelf={changeShelf} key={book.id} shelves={shelves} book={book}/>) : ''}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks