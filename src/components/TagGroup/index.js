import React, { Component } from 'react';
import TagItem from '../TagItem'
import './index.css';

class TagGroup extends Component {
    render() {
        const { item, tags } = this.props;
        return (
          <div className="tag-group">
            {   
                item.tags.map((tagId) => {
                    const foundTagList = tags.filter(tag => tag.id === tagId);
                    if(foundTagList.length > 0) {
                        const foundTag = foundTagList[0];

                        return <TagItem key={foundTag.id} detail={foundTag} />
                    }
                    
                    return "";
                })
            }
          </div>
        );
    }
}

export default TagGroup;