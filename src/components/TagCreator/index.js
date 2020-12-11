import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { addTag } from '../../apis/tags';
import './index.css';

class TagCreator extends Component {
    createTag = (values) => {
        const newTag = {
            message : values.message.trim(),
            color : values.color
        }
        
        addTag(newTag)
        .then((response) => {
            this.props.addTag(response.data);
        }); 
    }

    render() {
        const tagColor = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
        
        const { tags } = this.props;

        const { Option } = Select;

        return (
            <Form layout="inline" onFinish={this.createTag}>
                <Form.Item 
                    name="message"
                    rules={[
                        ({
                            validator(_, value) {
                                if(value === undefined) {
                                    return Promise.reject("Please input a new tag.")
                                }
                                
                                const foundTag = tags && tags.filter(tag => tag.message === value.trim());
                                if(foundTag.length > 0) {
                                    return Promise.reject("Tag existed.")
                                }

                                return Promise.resolve()
                            }
                        })
                    ]}
                >
                    <Input placeholder="Input a new tag here." />
                </Form.Item>
                <Form.Item name="color" rules={[{required: true, message : "Please select a color."}]}>
                    <Select className="tag-creator-select" placeholder="Select a color">
                        {
                            tagColor.map(color => <Option key={color} value={color}>{color}</Option>)
                        }
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="default" htmlType="submit">add</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default TagCreator;