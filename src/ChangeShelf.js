import React, { Component } from 'react'

class ChangeShelf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'move'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
        this.props.changeShelf(this.props.book, event.target.value);
    }

    render() {
        const { shelves } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={this.state.value}>
                    <option value="move" disabled>Move to...</option>
                    {shelves.map(shelf => <ShelfOption key={shelf.key} shelf={shelf} />)}
                </select>
            </div>
        )
    }
}

function ShelfOption(props) {
    return <option value={props.shelf.key}>{props.shelf.label}</option>;
}

export default ChangeShelf