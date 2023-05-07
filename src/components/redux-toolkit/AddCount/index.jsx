import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumAction, minusNumAction, slice } from '../store/count';

function AddCount() {
    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();
    return (
      <div>
        <h2>AddCount count: {count}</h2>
        <button onClick={e => dispatch(addNumAction(2))}>+2</button>
        <button onClick={e => dispatch(addNumAction(4))}>+4</button>
    </div>
  )
}

export default AddCount