import { connect } from 'react-redux';
import Timer from './Timer';

const mapStateToProps = ({ timer: {selectedTimer} }) => ({ selectedTimer });

export default connect(mapStateToProps)(Timer);
