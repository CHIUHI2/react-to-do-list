import { List, Button } from 'antd';
import React, { Component } from 'react';
import './ToDoItem.css';

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
            <List.Item>
                <span className={detail.done ? "done" : ""} onClick={() => this.updateDoneStatus(detail.id)}>{detail.message}</span>
                <span onClick={() => this.removeToDo(detail.id)}>X</span>
            </List.Item>
        );
    }
}

export default ToDoItem;