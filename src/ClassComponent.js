import React from "react";
import { connect } from 'react-redux';
import * as actions from './redux/dataSlice';

const mapStateToProps = (state, ownProps) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessage: message => dispatch(actions.updateMessage(message)),
});

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <form>
          <label>
            Class Component<br/>
            <input type="text" value={this.props.message} onChange={(event) => this.props.updateMessage(event.target.value)}/>
          </label>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);