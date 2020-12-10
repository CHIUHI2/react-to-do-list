import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import TagCreateFormContainer from '../../containers/TagCreateFormContiner';
import TagSelectorContainer from '../../containers/TagSelectorContainer';
import { TagOutlined } from '@ant-design/icons';
import { replaceToDo } from '../../apis/toDoList';

class TagManagementModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading : false,
            visible : false,
            selectedTags : this.props.item.tags
        }
    }

    handleCancel = () => {
        this.setState({ visible: false });
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    onSelectTag = (id) => {
        const { selectedTags } = this.state;
        var updatedTags = [];

        if(selectedTags.includes(id)) {
            updatedTags = selectedTags.filter(selectedId => selectedId !== id);  
        }
        else {
            updatedTags = selectedTags.concat(id);
        }

        this.setState({
            selectedTags : updatedTags
        });
    }

    addTag = () => {
        const { item } = this.props;
        const { selectedTags } = this.state;

        const updatedItem = {
            ...item,
            tags : selectedTags
        }

        replaceToDo(updatedItem)
        .then(((response) => {
            this.props.replaceToDo(response.data);
        }));

        this.handleCancel();
    };

    render() {
        const { visible } = this.state;
        const { tags, item } = this.props;

        return (
            <>
            <TagOutlined onClick={this.showModal} />
                <Modal
                    visible={visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    footer={[
                        <Button key="confirm" type="primary" onClick={this.addTag}>
                            Confirm
                        </Button>
                    ]}
                >   
                    {
                        tags.map(tag => <TagSelectorContainer key={tag.id} selected={item.tags.includes(tag.id)} tag={tag} onClick={this.onSelectTag} />)
                    }
                    <TagCreateFormContainer />
                </Modal>
            </>
        );
    }
}

export default TagManagementModal;