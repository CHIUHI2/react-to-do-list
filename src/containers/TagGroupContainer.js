import { connect } from 'react-redux';
import { replaceToDo } from '../actions';
import TagGroup from '../components/TagGroup';

const mapStateToProps = (state) => ({
    tags : state.tags
})

const mapDispatchToProps = (dispatch) => ({
    replaceToDo : (item) => {
        dispatch(replaceToDo(item));
    }
})

const TagGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TagGroup);

export default TagGroupContainer;