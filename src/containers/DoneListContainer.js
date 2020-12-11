import { connect } from 'react-redux';
import { initToDoList, initTags } from '../actions';
import DoneList from '../components/DoneList';

const mapStateToProps = (state) => ({
    doneList : state.toDoList.filter((item) => item.done)
})

const mapDispatchToProps = (dispatch) => ({
    initTags : (tags) => {
        dispatch(initTags(tags));
    },
    initToDoList : (toDoList) => {
        dispatch(initToDoList(toDoList));
    }
})

const DoneListContainer = connect(mapStateToProps, mapDispatchToProps)(DoneList);

export default DoneListContainer;