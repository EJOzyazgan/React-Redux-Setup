import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateMessage } from './redux/dataSlice';

const FunctionComponent = (props) => {
  
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  
  return (
    <div >
      <form>
        <label>
          Function Component<br/>
          <input type="text" value={message} onChange={(event) => dispatch(updateMessage(event.target.value))}/>
        </label>
      </form>
    </div>
  );
}

export default FunctionComponent;
