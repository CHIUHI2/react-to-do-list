import React, { Component } from 'react';
import ToDoItemContainer from '../../containers/ToDoItemContainer';
import { List } from 'antd';
import './index.css';
import { getToDoList } from '../../apis/toDoList';
import { getTags } from '../../apis/tags';

class DoneList extends Component {
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
        const { doneList } = this.props;

        return (
            <div className="to-do-list">
            <List 
                size="large"
                header={<h1>Done List</h1>}
                bordered
                dataSource={doneList}
                renderItem={doneItem => <ToDoItemContainer key={doneItem.id} detail={doneItem} />}
            />
            </div>
        );
    }
}

export default DoneList;