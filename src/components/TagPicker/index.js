import React, { Component } from 'react';
import { Tag, Tooltip } from 'antd';
import { removeTag } from '../../apis/tags';
import { getToDoList } from '../../apis/toDoList';
import './index.css';

class TagPicker extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            selected : this.props.selected
        }
    }

    removeTag = (id) => {
        removeTag(id)
        .then((_response) => {
            this.props.removeTag(id);

            getToDoList()
            .then((response) => {
                this.props.initToDoList(response.data);
            });

            this.props.onRemove(id)
        });
    }

    onSelecteTag = (id) => {
        this.setState({
            selected : !this.state.selected
        },
        this.props.onClick(id)
        );
    }

    handleTagMessage = (isLongTag, message, messageLengthLimit) => {
        return isLongTag ? `${message.slice(0, messageLengthLimit)}...` : message;
    }

    render() {
        const { tag } = this.props;

        const messageLengthLimit = 20;

        const isLongTag = tag.message.length > messageLengthLimit;

        const tagMessage = this.handleTagMessage(isLongTag, tag.message, messageLengthLimit);

        const tagItem = (<Tag 
                            key={tag.id}
                            className={`tag-selector${this.state.selected ? " selected" : ""}`}
                            color={tag.color}
                            closable
                            onClose={() => this.removeTag(tag.id)}
                            onClick={() => this.onSelecteTag(tag.id)}
                        >
                            {tagMessage}
                        </Tag>);

        const longTag = (
            <Tooltip 
                key={tag.id}
                title={tag.message}
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

export default TagPicker;