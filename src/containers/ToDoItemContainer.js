import { connect } from 'react-redux';
import { removeToDo, replaceToDo } from '../actions';
import ToDoItem from '../components/ToDoItem';

const mapDispatchToProps = (dispatch) => ({
    removeToDo : (id) => {
        dispatch(removeToDo(id));
    },
    replaceToDo : (item) => {
        dispatch(replaceToDo(item));
    }
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;