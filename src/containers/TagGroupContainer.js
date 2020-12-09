import { connect } from 'react-redux';
import { replaceToDo } from '../actions';
import TagGroup from '../components/TagGroup';

const mapDispatchToProps = (dispatch) => ({
    replaceToDo : (item) => {
        dispatch(replaceToDo(item));
    }
})

const TagGroupContainer = connect(null, mapDispatchToProps)(TagGroup);

export default TagGroupContainer;