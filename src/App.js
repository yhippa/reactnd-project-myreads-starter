import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookList} />
        <Route path='/search' component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
