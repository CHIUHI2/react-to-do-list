import { connect } from 'react-redux';
import { removeToDo, updateDoneStatus } from '../actions';
import ToDoItem from '../components/ToDoItem';

const mapDispatchToProps = (dispatch) => ({
    removeToDo : (id) => {
        dispatch(removeToDo(id));
    },
    updateDoneStatus : (id) => {
        dispatch(updateDoneStatus(id));
    }
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;