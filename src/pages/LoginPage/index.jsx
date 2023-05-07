import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function LoginPage() {
    const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
        LoginPage
        {isLogin ? <Navigate to='/home'/> : <button onClick={e => setIsLogin(true)}>登录</button>}
    </div>
  )
}

export default LoginPage