import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { addToDo } from '../apis/toDoList';

class toDoItemGenerator extends Component {
    addToDo = (values) => {
        addToDo(values.message)
        .then((response) => {
            this.props.addToDo(response.data);
        });
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