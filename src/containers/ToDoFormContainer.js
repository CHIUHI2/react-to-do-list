import { connect } from 'react-redux';
import { addToDo } from '../actions';
import ToDoForm from '../components/ToDoForm';

const mapDispatchToProps = (dispatch) => ({
    addToDo : (item) => {
        dispatch(addToDo(item));
    }
})

const ToDoFormContainer = connect(null, mapDispatchToProps)(ToDoForm);

export default ToDoFormContainer;