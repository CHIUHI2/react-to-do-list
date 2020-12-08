import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        const {detail} = this.props;

        return (
            <div>
                <span>{detail.message}</span>
                <button>X</button>
            </div>
        );
    }
}

export default ToDoItem;