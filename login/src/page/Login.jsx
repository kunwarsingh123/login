import React from 'react'
function Login() {
  
  return (
    <>
    <div className='login'>
      <form action="">
        <h1>Log in</h1>
        <label htmlFor="">username</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button className='button'>submit</button>
      </form>
    </div>
    </>
  )
}

export default Login
