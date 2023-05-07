import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import TopLineHOC from "../TopLineHOC";
import "./style.css";

function CssTransitionContent() {
  const [isShow, setIsShow] = useState(true);
  const nodeRef = useRef(null);
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "隐藏" : "显示"}
      </button>
      <CSSTransition
        nodeRef={nodeRef}
        in={isShow}
        timeout={1000}
        unmountOnExit={true}
        classNames="jelly"
        appear
      >
        <div ref={nodeRef}>content</div>
      </CSSTransition>
    </div>
  );
}

export default TopLineHOC(CssTransitionContent);
