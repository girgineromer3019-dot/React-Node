import React from 'react'

function Login() {
  return (
//<>bu isaret birden fazla div varsa kullanilir.
    <>
    <div>
        <p>User name</p>
        <input type="text" />
    </div>

    <div>
        <p>Password</p>
        <input type="password" />   
    </div>
    <br />
    <button>Login</button>
    </>  
  )
}

export default Login