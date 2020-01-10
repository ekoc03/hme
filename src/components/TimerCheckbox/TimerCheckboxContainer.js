import { connect } from 'react-redux';
import TimerCheckbox from './TimerCheckbox';
import { selectTimer } from '../../actions/timerCheckbox';

const mapStateToProps = ({ timer: {selectedTimer} }) => ({ selectedTimer });

const mapDispatchToProps = { selectTimer };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerCheckbox);
