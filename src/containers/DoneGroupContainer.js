import { connect } from 'react-redux';
import DoneGroup from '../components/DoneGroup';

const mapStateToProps = (state) => ({
    doneList : state.filter((item) => item.done)
})

const DoneGroupContainer = connect(mapStateToProps)(DoneGroup);

export default DoneGroupContainer;