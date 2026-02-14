import React from 'react'

function Login() {
  return (
//<> bu isaret bir div gibi davraniyor. Eger birden fazla div varsa bunu kullanmak zorundayiz. Ama tek bir div varsa buna gerek yok
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