import React, { Component } from 'react';
import ToDoItemContainer from '../../containers/ToDoItemContainer';
import { List } from 'antd';
import './index.css';
import { getToDoList } from '../../apis/toDoList';
import { getTags } from '../../apis/tags';

class ToDoList extends Component {
    componentDidMount() {
        getToDoList()
        .then((response) => {
            this.props.initToDoList(response.data);
        });

        getTags()
        .then((response) => {
            this.props.initTags(response.data);
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

export default ToDoList;