import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';

class ToDoGroup extends Component {
    render() {
        const { toDoList } = this.props;

        return (
            <div>
                {
                    toDoList.map((toDoItem) => <ToDoItemContainer key={toDoItem.id} detail={toDoItem} />)
                }
            </div>
        );
    }
}

export default ToDoGroup;