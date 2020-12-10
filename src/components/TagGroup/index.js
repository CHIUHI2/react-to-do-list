import React, { Component } from 'react';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { replaceToDo } from '../../apis/toDoList';
import TagItemContainer from '../../containers/TagItemContainer';
import './index.css';

class TagGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addTagInputVisible: false,
            addTagInputValue: ""
        };
    }
    
    showAddTagInput = () => {
        this.setState(
            { 
                addTagInputVisible: true 
            }, 
            () => this.addTagInput.focus()
        );
    };
    
    onAddTagInputChange = (event) => {
        this.setState(
            { 
                addTagInputValue: event.target.value
            }
        );
    };

    saveAddTagInputRef = (input) => {
        this.addTagInput = input;
    };
    
    addTag = () => {
        const { addTagInputValue } = this.state;
        const { item } = this.props;
        const tags = item.tags;

        if (addTagInputValue && tags.indexOf(addTagInputValue) === -1) {
            const updatedItem = {
                ...item,
                tags : tags.concat(addTagInputValue)
            }

            replaceToDo(updatedItem)
            .then(((response) => {
                this.props.replaceToDo(response.data);
            }));
        }

        this.setState({
            addTagInputValue : "",
            addTagInputVisible : false
        });
    };
    
    render() {
        const { addTagInputVisible, addTagInputValue } = this.state;
        const { item } = this.props;

        const addTag = (
            <Tag 
                onClick={this.showAddTagInput}
            >
                <PlusOutlined /> New Tag
            </Tag>
        );

        const addTagInput = (
            <Input
                ref={this.saveAddTagInputRef}
                type="text"
                size="small"
                className="tag-input"
                value={addTagInputValue}
                onChange={this.onAddTagInputChange}
                onBlur={this.addTag}
                onPressEnter={this.addTag}
            />
        );

        return (
          <>
            {
                item.tags.map((tag) => <TagItemContainer key={tag} item={item} tag={tag} />)
            }
            {addTagInputVisible ? addTagInput : addTag}
          </>
        );
    }
}

export default TagGroup;