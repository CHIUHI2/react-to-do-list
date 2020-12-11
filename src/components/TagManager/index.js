import React, { Component } from 'react';
import { Modal, Button, Divider } from 'antd';
import TagCreatorContainer from '../../containers/TagCreatorContiner';
import TagPickerContainer from '../../containers/TagPickerContainer';
import { TagOutlined } from '@ant-design/icons';
import { replaceToDo } from '../../apis/toDoList';

class TagManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading : false,
            visible : false,
            selectedTags : this.props.item.tags ? this.props.item.tags : []
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

        if(selectedTags.includes(id)) {
            this.onRemoveTag(id);  
        }
        else {
            this.setState({
                selectedTags : selectedTags.concat(id)
            });
        }
    }

    onRemoveTag = (id) => {
        this.setState({
            selectedTags : this.state.selectedTags.filter(selectedId => selectedId !== id)
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
                    title="Tag Manager"
                    visible={visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    footer={[
                        <Button key="apply" type="default" onClick={this.addTag}>
                            Apply
                        </Button>
                    ]}
                >  
                    {
                        tags.map(tag => <TagPickerContainer 
                                key={tag.id} 
                                selected={item.tags.includes(tag.id)} 
                                tag={tag} 
                                onClick={this.onSelectTag}
                                onRemove={this.onRemoveTag} 
                            />)
                    }
                    <Divider orientation="left">Create Tag</Divider>
                    <TagCreatorContainer />
                </Modal>
            </>
        );
    }
}

export default TagManager;