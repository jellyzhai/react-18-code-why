import React, { useEffect, useState } from 'react'
import store from '../store'
import { addAction } from '../store/count';

function AboutRedux() {
    const [count, setCount] = useState(0);

    const addNum = num => {
        store.dispatch(addAction(num));
    }

    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
          setCount(store.getState().count.count);
      });
    
      return () => {
        unsubscribe();
      }
    }, [])
    
  return (
    <div>
        <h2>count: {count}</h2>
        <button onClick={e => addNum(1)}>+1</button>
        <button onClick={e => addNum(3)}>+3</button>
        <button onClick={e => addNum(5)}>+5</button>
    </div>
  )
}

export default AboutRedux