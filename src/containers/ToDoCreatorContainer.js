import { connect } from 'react-redux';
import { addToDo } from '../actions';
import ToDoCreator from '../components/ToDoCreator';

const mapStateToProps = (state) => ({
    toDoList : state.toDoList
})

const mapDispatchToProps = (dispatch) => ({
    addToDo : (item) => {
        dispatch(addToDo(item));
    }
})

const ToDoCreatorContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoCreator);

export default ToDoCreatorContainer;