import React, { Component } from 'react'

class ChangeShelf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.book.shelf ? props.book.shelf : 'none'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        console.log('event.target.value', event.target.value)
        this.setState({
            value: event.target.value,
        });
        this.props.changeShelf(this.props.book, event.target.value);
    }

    render() {
        const { shelves } = this.props;
        return (
            <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='move'>Move to...</option>
                    {shelves.map(shelf => <option key={shelf.key} value={shelf.key}>{shelf.label}</option>)}
                </select>
            </div>
        )
    }
}

export default ChangeShelf