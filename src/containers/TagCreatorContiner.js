import { connect } from 'react-redux';
import { addTag } from '../actions';
import TagCreator from '../components/TagCreator';

const mapStateToProps = (state) => ({
    tags : state.tags
})

const mapDispatchToProps = (dispatch) => ({
    addTag : (tag) => {
        dispatch(addTag(tag));
    }
})

const TagCreatorContainer = connect(mapStateToProps, mapDispatchToProps)(TagCreator);

export default TagCreatorContainer;