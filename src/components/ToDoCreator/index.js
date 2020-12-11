import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { addToDo } from '../../apis/toDoList';

class ToDoCreator extends Component {
    addToDo = (values) => {
        addToDo(values.message.trim())
        .then((response) => {
            this.props.addToDo(response.data);
        });
    }

    render() {
        const { toDoList } = this.props;
        return (
            <Form layout="inline" onFinish={(values) => this.addToDo(values)}>
                <Form.Item 
                    name="message"
                    rules={[
                        {required: true, message : "Please input a new todo."},
                        ({
                            validator(_, value) {
                                const foundToDos = toDoList && toDoList.filter(toDo => toDo.message === value.trim());
                                if(foundToDos.length > 0) {
                                    return Promise.reject('ToDo existed.')
                                }

                                return Promise.resolve()
                            }
                        })
                    ]}
                >
                    <Input placeholder="Input a new todo here." />
                </Form.Item>
                <Form.Item>
                    <Button type="default" htmlType="submit">add</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default ToDoCreator;