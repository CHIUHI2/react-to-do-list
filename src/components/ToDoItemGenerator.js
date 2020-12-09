import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

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
            <Form onFinish={(values) => this.addToDo(values)}>
                <FormItem name="message" rules={[{required: true, message : "Input is required."}]}>
                    <Input placeholder="Input a new todo here." />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">add</Button>
                </FormItem>
            </Form>
        );
    }
}

export default toDoItemGenerator;