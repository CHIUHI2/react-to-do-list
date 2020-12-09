import { connect } from 'react-redux';
import { replaceToDo } from '../actions';
import TagItem from '../components/TagItem';

const mapDispatchToProps = (dispatch) => ({
    replaceToDo : (item) => {
        dispatch(replaceToDo(item));
    }
})

const TagItemContainer = connect(null, mapDispatchToProps)(TagItem);

export default TagItemContainer;