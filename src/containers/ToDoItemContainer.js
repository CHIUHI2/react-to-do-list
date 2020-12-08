import { connect } from 'react-redux';
import { removeToDo } from '../actions';
import ToDoItem from '../components/ToDoItem';

const mapDispatchToProps = (dispatch) => ({
    removeToDo : (id) => {
        dispatch(removeToDo(id));
    }
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;