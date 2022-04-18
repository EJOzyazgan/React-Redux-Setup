import React from "react";
import { connect } from 'react-redux';
import * as actions from './redux/dataSlice';

const mapStateToProps = (state, ownProps) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessage: message => dispatch(actions.updateMessage(message)),
});

const FunctionComponent = (props) => {
  return (
    <div >
      <form>
        <label>
          Function Component<br/>
          <input type="text" value={props.message} onChange={(event) => props.updateMessage(event.target.value)}/>
        </label>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionComponent);
