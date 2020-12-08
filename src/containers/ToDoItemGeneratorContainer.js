import { connect } from 'react-redux';
import { addToDo } from '../actions';
import ToDoItemGenerator from '../components/ToDoItemGenerator';

const mapDispatchToProps = (dispatch) => ({
    addToDo : (item) => {
        dispatch(addToDo(item));
    }
})

const ToDoItemGeneratorContainer = connect(null, mapDispatchToProps)(ToDoItemGenerator);

export default ToDoItemGeneratorContainer;