import React, { Component } from 'react';
import { Tag, Tooltip } from 'antd';
import { replaceToDo } from '../../apis/toDoList';

class TagItem extends Component {
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

    getTagColor(tag) {
        const tagColor = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
    
        return tagColor[(tag.length % tagColor.length)];
    }
    
    render() {
        const { tag } = this.props;

        const tagLengthLimit = 20;

        const isLongTag = tag.length > tagLengthLimit;

        const tagColor = this.getTagColor(tag);

        const tagItem = (
            <Tag
                key={tag}
                closable
                onClose={() => this.removeTag(tag)}
                color={tagColor}
            >
                <span>{isLongTag ? `${tag.slice(0, tagLengthLimit)}...` : tag}</span>
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

export default TagItem;