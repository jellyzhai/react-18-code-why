import React from "react";
import {
  NavLink,
  useRoutes,
} from "react-router-dom";
import routers from "../routers";

import "./style.css";

function RouterPage() {
  return (
    <div>
      <h2>RouterPage</h2>
      <NavLink to="/home">首页</NavLink> <NavLink to="/about">关于</NavLink>{" "}
      <NavLink to="/login">登录</NavLink>
      {/* <Link to='/home'>首页</Link> <Link to='/about'>关于</Link> <Link to='/login'>登录</Link> */}
      <hr />
      {useRoutes(routers)}
    </div>
  );
}

export default RouterPage;
