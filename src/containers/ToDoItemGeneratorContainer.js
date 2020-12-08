import { connect } from 'react-redux';
import { addToDo } from '../actions';
import ToDoItemGenerator from '../components/ToDoItemGenerator';

const mapDispatchToProps = (dispatch) => ({
    addToDo : (item) => {
        dispatch(addToDo(item));
    }
})

const CounterContainer = connect(null, mapDispatchToProps)(ToDoItemGenerator);

export default CounterContainer;