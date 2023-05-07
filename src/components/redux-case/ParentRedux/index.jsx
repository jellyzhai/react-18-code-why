import React, { useEffect, useState } from "react";
import TopLineHOC from "../../TopLineHOC";
import AboutRedux from "../AboutRedux";
import { ConnectCustomContext } from "../connectCustom";
import DetailReactRedux from "../DetailReactRedux";
import HomeRedux from "../HomeRedux";
import OtherReactReduxHooks from "../OtherReactReduxHooks";
import store from "../store";
import { FlexWrapper } from "./style";

function ParentRedux() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count.count);
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <div>
      <h2>count: {count}</h2>
      <ConnectCustomContext.Provider value={store}>
        <FlexWrapper>
          <AboutRedux />
          <HomeRedux />
          <DetailReactRedux />
          <OtherReactReduxHooks />
        </FlexWrapper>
      </ConnectCustomContext.Provider>
    </div>
  );
}

export default TopLineHOC(ParentRedux);
