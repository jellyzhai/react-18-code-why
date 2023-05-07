import { useContext, useEffect, useState } from "react";
import {ConnectCustomContext} from "./connectCustomContext";

export function connectCustom(mapStateToProps, mapDispatchToProps) {
  return (Component) => {
    return (props) => {
      const contextStore = useContext(ConnectCustomContext)
      const [stateObj, setStateObj] = useState(mapStateToProps(contextStore.getState()));
      const [dispatchObj, setDispatchObj] = useState(mapDispatchToProps(contextStore.dispatch));

      useEffect(() => {
        const unsubscribe = contextStore.subscribe(() => {
            setStateObj(mapStateToProps(contextStore.getState()));
            setDispatchObj(mapDispatchToProps(contextStore.dispatch));
        });

        return () => {
          unsubscribe();
        };
      }, []);

      return <Component {...props} {...stateObj} {...dispatchObj}></Component>;
    };
  };
}
