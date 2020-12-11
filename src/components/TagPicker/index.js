import React, { Component } from 'react';
import { Tag } from 'antd';
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
        .then((response) => {
            this.props.removeTag(response.data.id);

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

    render() {
        const { tag } = this.props;

        return (
            <Tag 
                key={tag.id}
                className={`tag-selector${this.state.selected ? " selected" : ""}`}
                color={tag.color}
                closable
                onClose={() => this.removeTag(tag.id)}
                onClick={() => this.onSelecteTag(tag.id)}
            >
                {tag.message}
            </Tag>
        );
    }
}

export default TagPicker;