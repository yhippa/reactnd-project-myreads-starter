import React, { Component } from 'react'

const books = [
    {
        cover: { width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' },
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee'
    }
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
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={books[0].cover}></div>
                                    <div className="book-shelf-changer">
                                        <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value={shelves[0].key}>{shelves[0].label}</option>
                                            <option value={shelves[1].key}>{shelves[1].label}</option>
                                            <option value={shelves[2].key}>{shelves[2].label}</option>
                                            <option value={shelves[3].key}>{shelves[3].label}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{books[0].title}</div>
                                <div className="book-authors">{books[0].authors}</div>
                            </div>
                        </li>
                        <li>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                                    <div className="book-shelf-changer">
                                        <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">Ender's Game</div>
                                <div className="book-authors">Orson Scott Card</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf
