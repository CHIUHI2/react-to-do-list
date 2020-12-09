import { List } from 'antd';
import React, { Component } from 'react';
import './ToDoItem.css';
import { removeToDo, replaceToDo } from '../apis/toDoList';

class ToDoItem extends Component {
    removeToDo = (id) => {
        removeToDo(id)
        .then((response) => {
            this.props.removeToDo(response.data.id); 
        });
    }

    updateDoneStatus = (detail) => {
        var updatedItem = {
            ...detail,
            done : true
        }

        replaceToDo(detail.id, updatedItem)
        .then((response) => {
            this.props.updateDoneStatus(response.data.id); 
        });
    }

    render() {
        const {detail} = this.props;

        return (
            <List.Item>
                <span className={detail.done ? "done" : ""} onClick={() => this.updateDoneStatus(detail)}>{detail.message}</span>
                <span onClick={() => this.removeToDo(detail.id)}>X</span>
            </List.Item>
        );
    }
}

export default ToDoItem;