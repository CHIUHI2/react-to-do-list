import { connect } from 'react-redux';
import { initToDoList, initTags } from '../actions';
import ToDoList from '../components/ToDoList';

const mapStateToProps = (state) => ({
    toDoList : state.toDoList
})

const mapDispatchToProps = (dispatch) => ({
    initTags : (tags) => {
        dispatch(initTags(tags));
    },
    initToDoList : (toDoList) => {
        dispatch(initToDoList(toDoList));
    }
})

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoListContainer;