import { connect } from 'react-redux';
import { addTag } from '../actions';
import TagCreateForm from '../components/TagCreateForm';

const mapDispatchToProps = (dispatch) => ({
    addTag : (tag) => {
        dispatch(addTag(tag));
    }
})

const TagCreateFormContainer = connect(null, mapDispatchToProps)(TagCreateForm);

export default TagCreateFormContainer;