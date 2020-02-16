import React, { Component } from 'react'

class ChangeShelf extends Component {
    render() {
        const { shelves } = this.props;
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    {shelves.map(shelf => <ShelfOption shelf={shelf} />)}
                </select>
            </div>
        )
    }
}

function ShelfOption(props) {
    return <option value={props.shelf.key}>{props.shelf.label}</option>;
}

export default ChangeShelf