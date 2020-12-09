import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import { List } from 'antd';
import './ToDoGroup.css';
import {getToDoList} from '../apis/toDoList';

class ToDoGroup extends Component {
    componentDidMount() {
        getToDoList()
        .then((response) => {
            this.props.initToDoList(response.data);
        });
    }

    render() {
        const { toDoList } = this.props;

        return (
            <div className="to-do-list">
            <List 
                size="large"
                header={<h1>ToDo List</h1>}
                bordered
                dataSource={toDoList}
                renderItem={toDoItem => <ToDoItemContainer key={toDoItem.id} detail={toDoItem} />}
            />
            </div>
        );
    }
}

export default ToDoGroup;