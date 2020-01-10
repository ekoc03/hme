import { connect } from 'react-redux';
import TimerPage from './TimerPage';
import { addTimer } from '../../actions/timerCheckbox';

const mapStateToProps = ({ timer: {timers} }) => ({ timers });

const mapDispatchToProps = { addTimer };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerPage);
