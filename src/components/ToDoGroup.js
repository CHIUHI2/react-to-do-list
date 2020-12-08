import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoGroup extends Component {
    render() {
        const { toDoList } = this.props;

        return (
            <div>
                {
                    toDoList.map((toDoItem) => <ToDoItem key={toDoItem.id} detail={toDoItem} />)
                }
            </div>
        );
    }
}

export default ToDoGroup;