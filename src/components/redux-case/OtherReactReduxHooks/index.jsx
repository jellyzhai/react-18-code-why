import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, minusAction } from "../store/count";
import { getVueBronzeVipsAction } from "../store/vueVip";

function OtherReactReduxHooks() {
  const {count, vueVip} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVueBronzeVipsAction())
  }, [])
  

  return (
    <div>
      <h2>函数式组件 count: {count.count}</h2>
      <button onClick={() => dispatch(minusAction(1))}>-1</button>
      <button onClick={() => dispatch(addAction(3))}>+3</button>
      <button onClick={() => dispatch(minusAction(5))}>-5</button>

      <div>
          <h3>vue 青铜会员：</h3>
          <ul>
            {
              vueVip.vueBronzeVips.map(item => (
                <li key={item.name}><a href={item.url}>{item.name}</a></li>
              ))
            }
          </ul>
        </div>
    </div>
  );
}

export default OtherReactReduxHooks;
