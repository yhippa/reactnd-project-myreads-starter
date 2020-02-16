import React, { Component } from 'react'

class ChangeShelf extends Component {
    render() {
        const { shelves } = this.props;
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    <option value={shelves[0].key}>{shelves[0].label}</option>
                    <option value={shelves[1].key}>{shelves[1].label}</option>
                    <option value={shelves[2].key}>{shelves[2].label}</option>
                    <option value={shelves[3].key}>{shelves[3].label}</option>
                </select>
            </div>
        )
    }
}

export default ChangeShelf