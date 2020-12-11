import { connect } from 'react-redux';
import { replaceToDo } from '../actions';
import TagManager from '../components/TagManager';

const mapStateToProps = (state) => ({
    tags : state.tags
})

const mapDispatchToProps = (dispatch) => ({
    replaceToDo : (item) => {
        dispatch(replaceToDo(item));
    }
})

const TagManagerContainer = connect(mapStateToProps, mapDispatchToProps)(TagManager);

export default TagManagerContainer;