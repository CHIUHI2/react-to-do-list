import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import { List } from 'antd';
import './ToDoGroup.css';

class ToDoGroup extends Component {
    render() {
        const { toDoList } = this.props;

        return (
            <List 
                size="large"
                header={<h1>ToDo List</h1>}
                bordered
                dataSource={toDoList}
                renderItem={toDoItem => <ToDoItemContainer key={toDoItem.id} detail={toDoItem} />}
            />
        );
    }
}

export default ToDoGroup;