import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
  return (
    <div>
        <h3>HomePage</h3>
        <NavLink to='/home/recommend'>推荐</NavLink>
        <NavLink to='/home/rank'>排行</NavLink>
        <button onClick={e => navigate('/home/recommend')}>推荐</button>
        <button onClick={e => navigate('/home/rank')}>排行</button>
        <Outlet/>
    </div>
  )
}

export default HomePage