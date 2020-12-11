import React, { Component } from 'react';
import { Tag, Tooltip } from 'antd';

class TagItem extends Component {
    handleTagMessage = (isLongTag, message, messageLengthLimit) => {
        return isLongTag ? `${message.slice(0, messageLengthLimit)}...` : message;
    }

    render() {
        const { detail } = this.props;

        const messageLengthLimit = 20;

        const isLongTag = detail.message.length > messageLengthLimit;

        const tagMessage = this.handleTagMessage(isLongTag, detail.message, messageLengthLimit);

        const tagItem = (
            <Tag
                key={detail.id}
                color={detail.color}
            >
                <span>{tagMessage}</span>
            </Tag>
        );

        const longTag = (
            <Tooltip 
                key={detail.id}
                title={detail.message}
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