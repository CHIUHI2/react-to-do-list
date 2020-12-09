import { List } from 'antd';
import React, { Component } from 'react';
import './ToDoItem.css';
import { removeToDo } from '../apis/toDoList';

class ToDoItem extends Component {
    removeToDo = (id) => {
        removeToDo(id)
        .then((response) => {
            this.props.removeToDo(response.data.id); 
        });
    }

    updateDoneStatus = (id) => {
        this.props.updateDoneStatus(id);
    }

    render() {
        const {detail} = this.props;

        return (
            <List.Item>
                <span className={detail.done ? "done" : ""} onClick={() => this.updateDoneStatus(detail.id)}>{detail.message}</span>
                <span onClick={() => this.removeToDo(detail.id)}>X</span>
            </List.Item>
        );
    }
}

export default ToDoItem;