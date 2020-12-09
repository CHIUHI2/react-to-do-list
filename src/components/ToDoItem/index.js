import React, { Component } from 'react';
import './index.css';
import { removeToDo, replaceToDo } from '../../apis/toDoList';
import { List } from 'antd';
import { DeleteOutlined, CheckSquareFilled, BorderOutlined } from '@ant-design/icons';

class index extends Component {
    removeToDo = (id) => {
        removeToDo(id)
        .then((response) => {
            this.props.removeToDo(response.data.id); 
        });
    }

    updateDoneStatus = (detail) => {
        var updatedItem = {
            ...detail,
            done : !detail.done
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
                <div className="to-do-item"  onClick={() => this.updateDoneStatus(detail)}>
                    {detail.done ? <CheckSquareFilled /> : <BorderOutlined />}
                    <span>{detail.message}</span>
                </div>
                <div className="to-do-item-action">
                    <DeleteOutlined onClick={() => this.removeToDo(detail.id)} />
                </div>
            </List.Item>
        );
    }
}

export default index;