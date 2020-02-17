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
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}));
  }
  
  changeShelf = (book, shelf) => {
    let books = this.state.books;
    let index = books.findIndex((element) => element.title === book.title);
    books[index].shelf = shelf;
    BooksAPI.update(books[index], shelf);
    this.setState({
      books: books,
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (<BookList changeShelf={this.changeShelf} books={this.state.books} shelves={this.state.shelves} />)} />
        <Route path='/search' render={() => (<SearchBooks changeShelf={this.changeShelf} shelves={this.state.shelves}/>)} />
      </div>
    )
  }
}

export default BooksApp
