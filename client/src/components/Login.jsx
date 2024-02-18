import React, { useContext } from 'react'
import AuthContext from '../providers/AuthContext'

const Login = () => {
  const {username, setusername , password , setpassword , loginuser} = useContext(AuthContext);
  return (
    <div>
      Login<br/>
      <input type='text' placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} />
      <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button type='button' onClick={loginuser} >Login</button>
    </div>
  )
}

export default Login
