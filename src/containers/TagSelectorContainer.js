import { connect } from 'react-redux';
import TagSelector from '../components/TagSelector';
import { removeTag } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    removeTag : (id) => {
        dispatch(removeTag(id));
    }
})

const TagSelectorContainer = connect(null, mapDispatchToProps)(TagSelector);

export default TagSelectorContainer;