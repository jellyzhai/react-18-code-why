import React, { useEffect, useState } from "react";
import store from "../store";
import { minusAction } from "../store/count";

function HomeRedux() {
  const [count, setCount] = useState(0);

  const minusNum = (num) => {
    store.dispatch(minusAction(num));
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count.count);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={(e) => minusNum(1)}>-1</button>
      <button onClick={(e) => minusNum(3)}>-3</button>
      <button onClick={(e) => minusNum(5)}>-5</button>
    </div>
  );
}

export default HomeRedux;
