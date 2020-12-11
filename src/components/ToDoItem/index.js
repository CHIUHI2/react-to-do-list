import React, { Component } from 'react';
import './index.css';
import { removeToDo, replaceToDo } from '../../apis/toDoList';
import { List } from 'antd';
import { DeleteOutlined, CheckSquareFilled, BorderOutlined } from '@ant-design/icons';
import TagGroupContainer from '../../containers/TagGroupContainer';
import TagManagerContainer from '../../containers/TagManagerContainer';

class ToDoItem extends Component {
    removeToDo = (id) => {
        removeToDo(id)
        .then((_response) => {
            this.props.removeToDo(id); 
        });
    }

    updateDoneStatus = (detail) => {
        var updatedItem = {
            ...detail,
            done : !detail.done
        }

        replaceToDo(updatedItem)
        .then((response) => {
            this.props.replaceToDo(response.data); 
        });
    }

    render() {
        const {detail} = this.props;

        return (
            <List.Item>
                <div className="to-do-item"  onClick={() => this.updateDoneStatus(detail)}>
                    {detail.done ? <CheckSquareFilled /> : <BorderOutlined />}
                    <span>{detail.message}</span>
                </div>
                <TagGroupContainer item={detail} />
                <div className="to-do-item-action">
                    <TagManagerContainer item={detail} />
                    <DeleteOutlined onClick={() => this.removeToDo(detail.id)} />
                </div>
            </List.Item>
        );
    }
}

export default ToDoItem;