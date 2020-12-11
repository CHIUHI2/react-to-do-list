import { connect } from 'react-redux';
import TagPicker from '../components/TagPicker';
import { removeTag, initToDoList } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    removeTag : (id) => {
        dispatch(removeTag(id));
    },
    initToDoList : (toDoList) => {
        dispatch(initToDoList(toDoList));
    }
})

const TagPickerContainer = connect(null, mapDispatchToProps)(TagPicker);

export default TagPickerContainer;