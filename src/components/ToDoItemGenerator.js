import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button } from 'antd';
import './ToDoItemGenerator.css';

class toDoItemGenerator extends Component {
    addToDo = (values) => {
        var toDo = {
            id : uuidv4(),
            message : values.message,
            done : false
        }

        this.props.addToDo(toDo);
    }

    render() {
        return (
            <Form layout="inline" onFinish={(values) => this.addToDo(values)}>
                <Form.Item name="message" rules={[{required: true, message : "Input is required."}]}>
                    <Input placeholder="Input a new todo here." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">add</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default toDoItemGenerator;