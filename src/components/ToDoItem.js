import React, { Component } from 'react';
import '../toDoItem.css';

class ToDoItem extends Component {
    removeToDo = (id) => {
        this.props.removeToDo(id);
    }

    updateDoneStatus = (id) => {
        this.props.updateDoneStatus(id);
    }

    render() {
        const {detail} = this.props;

        return (
            <div>
                <text className={detail.done ? "done" : ""} onClick={() => this.updateDoneStatus(detail.id)}>{detail.message}</text>
                <button onClick={() => this.removeToDo(detail.id)}>X</button>
            </div>
        );
    }
}

export default ToDoItem;