import { connect } from 'react-redux';
import GamePage from './GamePage';

const mapStateToProps = ({ timer: {selectedTimer} }) => ({ selectedTimer });

export default connect(mapStateToProps)(GamePage);
