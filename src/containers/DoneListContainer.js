import { connect } from 'react-redux';
import DoneList from '../components/DoneList';

const mapStateToProps = (state) => ({
    doneList : state.filter((item) => item.done)
})

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;