import {connect} from 'react-redux';
import { updateUserInput, submitHolding } from "../Actions/codedash";
import Codedash from '../Component/cookdash';

const mapStateToProps = state => ({
  userinput: state.Codedash.userinput,
  obj: state.Codedash.obj,
  allitem: state.Codedash.allitem,
  search: state.Codedash.search,
});

const mapDisptachToProps = dispatch => ({
  updateUserInput: (key, value) => dispatch(updateUserInput(key, value)),
  submitHolding: (e, props) => dispatch(submitHolding(e))
});
export default connect(mapStateToProps, mapDisptachToProps)(Codedash);