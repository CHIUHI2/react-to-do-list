import { connect } from 'react-redux';
import { initToDoList } from '../actions';
import ToDoGroup from '../components/ToDoGroup';

const mapStateToProps = (state) => ({
    toDoList : state
})

const mapDispatchToProps = (dispatch) => ({
    initToDoList : (toDoList) => {
        dispatch(initToDoList(toDoList));
    }
})

const ToDoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoGroup);

export default ToDoGroupContainer;