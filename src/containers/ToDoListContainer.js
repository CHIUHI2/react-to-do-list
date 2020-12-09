import { connect } from 'react-redux';
import { initToDoList } from '../actions';
import ToDoList from '../components/ToDoList';

const mapStateToProps = (state) => ({
    toDoList : state
})

const mapDispatchToProps = (dispatch) => ({
    initToDoList : (toDoList) => {
        dispatch(initToDoList(toDoList));
    }
})

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoListContainer;