import React, { Component } from 'react';
import { Tag, Tooltip } from 'antd';

class TagItem extends Component {
    render() {
        const { detail } = this.props;

        const messageLengthLimit = 20;

        const isLongTag = detail.message.length > messageLengthLimit;

        const tagItem = (
            <Tag
                key={detail.id}
                color={detail.color}
            >
                <span>{isLongTag ? `${detail.message.slice(0, messageLengthLimit)}...` : detail.message}</span>
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