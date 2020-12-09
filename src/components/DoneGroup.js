import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import { List } from 'antd';
import './ToDoGroup.css';

class DoneGroup extends Component {
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

export default DoneGroup;