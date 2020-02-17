import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      shelves: [
        {
          key: 'currentlyReading',
          label: 'Currently Reading'
        },
        {
          key: 'wantToRead',
          label: 'Want to Read'
        },
        {
          key: 'read',
          label: 'Read'
        },
        {
          key: 'none',
          label: 'None'
        },
      ]
    }

    this.changeShelf = this.changeShelf.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}));
  }
  
  changeShelf = (book, shelf) => {
    let books = this.state.books;
    let index = books.findIndex((element) => element.id === book.id);
    if (index === -1 ) {
      books.push(book);
      index = books.findIndex((element) => element.id === book.id);
    }    
    books[index].shelf = shelf;
    BooksAPI.update(book, shelf);
    this.setState({
      books: books,
    })
  }

  addBook = (book) => {
    this.setState({
      books: this.state.books.concat(book),
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (<BookList changeShelf={this.changeShelf} books={this.state.books} shelves={this.state.shelves} />)} />
        <Route path='/search' render={() => (<SearchBooks addBook={this.addBook} changeShelf={this.changeShelf} shelves={this.state.shelves}/>)} />
      </div>
    )
  }
}

export default BooksApp
