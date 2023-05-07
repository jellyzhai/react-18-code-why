import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVueSilverVipsAction } from "../store/vueSilverVip";
import TopLineHOC from '../../TopLineHOC'

function AsyncReducerRequest() {
  const vueVips = useSelector((state) => {
    return state.vueSilverVip.vips;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVueSilverVipsAction('hi'));
  }, []);

  return (
    <div>
      AsyncReducerRequest
      <h3>vue 白银会员：</h3>
      <ul>
        {vueVips?.map((item) => (
          <li key={item.name}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopLineHOC(AsyncReducerRequest);
