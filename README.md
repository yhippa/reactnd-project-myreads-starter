# MyReads: A Book Lending App

This is the implementation for Project 1 for the Udacity React Nanodegree (which is awesome and I recommend).  This app utilizes basic React components and [react-router](https://reacttraining.com/react-router/) to provide search and display functionality.

## Installation

To run the application:

* install all project dependencies with `npm install`
* start the application server with `npm start`

## Usage
The back-end application should automatically open up a web browser and automatically go to http://localhost:3000.  If it doesn't, please click on the link.

Users can search for books (by clicking on the green "+" button in the lower-right corner) and add them to a virtual shelf.  The user can go back to the virtual bookshelf by pressing the back arrow button in the upper-left corner of the search screen.

View functionality allows users to manage a collection of books on virtual shelves.  There are three shelves for the user to utilize:
* Currently Reading
* Want to Read
* Read

When the user finds a book through search  they can add them to any one of the available shelves.

The app uses web API to retrieve books from an endpoint and also persists the book state using the API. as a result, the books will maintain state upon refreshes or restarts of the application server.