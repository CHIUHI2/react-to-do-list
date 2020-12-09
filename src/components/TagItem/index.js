import React, { Component } from 'react';
import { Tag, Tooltip } from 'antd';
import { replaceToDo } from '../../apis/toDoList';

class index extends Component {
    removeTag = (removedTag) => {
        const { item } = this.props;

        const updatedItem = {
            ...item,
            tags : item.tags.filter(tag => tag !== removedTag)
        }

        replaceToDo(updatedItem)
        .then((response) => {
            this.props.replaceToDo(response.data);
        });
    };
    
    render() {
        const { tag } = this.props;

        const isLongTag = tag.length > 20;

        const tagItem = (
            <Tag
                key={tag}
                closable
                onClose={() => this.removeTag(tag)}
            >
                <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
            </Tag>
        );

        const longTag = (
            <Tooltip 
                key={tag}
                title={tag}
            >
            {tagItem}
            </Tooltip>
        );

        return (
            <>
                {isLongTag ? longTag : tagItem}
            </>
        );
    }
}

export default index;