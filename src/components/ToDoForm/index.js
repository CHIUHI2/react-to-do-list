import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { addToDo } from '../../apis/toDoList';

class ToDoForm extends Component {
    addToDo = (values) => {
        addToDo(values.message)
        .then((response) => {
            this.props.addToDo(response.data);
        });
    }

    render() {
        return (
            <Form layout="inline" onFinish={(values) => this.addToDo(values)}>
                <Form.Item name="message" rules={[{required: true, message : "Please input a new todo."}]}>
                    <Input placeholder="Input a new todo here." />
                </Form.Item>
                <Form.Item>
                    <Button type="default" htmlType="submit">add</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default ToDoForm;