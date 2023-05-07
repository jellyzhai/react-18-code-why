import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import TopLineHOC from "../TopLineHOC";
import './style.css';

function SwitchTransitionContent() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {/* SwitchTransition 是在2个内容同时显示动画的情况，如：一个进入，一个离开 */}
      <SwitchTransition mode="out-in">
        <CSSTransition
          classNames="login"
          key={isLogin ? "out" : "in"}
          timeout={1000}
        >
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "退出" : "登录"}
          </button>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default TopLineHOC(SwitchTransitionContent);
