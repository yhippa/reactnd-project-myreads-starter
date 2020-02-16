import React, { Component } from 'react'
import Book from './Book'

const books = [
    {
        cover: { width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' },
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee',
        shelf: 'currentlyReading'
    },
    {
        cover: { width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' },
        title: 'Ender\'s Game',
        authors: 'Orson Scott Card',
        shelf: 'currentlyReading'
    },
]

const shelves = [
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

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelves[0].label}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => <Book key={book.title} shelves={shelves} book={book}/>)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf
