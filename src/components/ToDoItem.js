import React, { Component } from 'react';

class ToDoItem extends Component {
    removeToDo = (id) => {
        this.props.removeToDo(id);
    }

    render() {
        const {detail} = this.props;

        return (
            <div>
                <span>{detail.message}</span>
                <button onClick={() => this.removeToDo(detail.id)}>X</button>
            </div>
        );
    }
}

export default ToDoItem;