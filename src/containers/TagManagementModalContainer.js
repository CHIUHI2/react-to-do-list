import { connect } from 'react-redux';
import { replaceToDo } from '../actions';
import TagManagementModal from '../components/TagManagementModal';

const mapStateToProps = (state) => ({
    tags : state.tags
})

const mapDispatchToProps = (dispatch) => ({
    replaceToDo : (item) => {
        dispatch(replaceToDo(item));
    }
})

const TagManagementModalContainer = connect(mapStateToProps, mapDispatchToProps)(TagManagementModal);

export default TagManagementModalContainer;