import { connect } from 'react-redux';
import { addTag } from '../actions';
import TagCreator from '../components/TagCreator';

const mapDispatchToProps = (dispatch) => ({
    addTag : (tag) => {
        dispatch(addTag(tag));
    }
})

const TagCreatorContainer = connect(null, mapDispatchToProps)(TagCreator);

export default TagCreatorContainer;