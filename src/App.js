import React, { useState, useEffect } from 'react'
import { GoogleLogin ,googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import "./App.css"

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    console.log(loggedUser)
  }, [loggedUser])

  const loginSuccess = (user) => {
    console.log("Login Success", user)
    setLoggedUser(jwt_decode(user.credential))
    setIsLoggedIn(true)
  }

  const loginFailure = (res) => {
    console.log("Login Failure", res)
  }

  const logoutSuccess = () => {
    googleLogout()
    console.log("Logout Success")
    setIsLoggedIn(false)
  }

  return (
    <div className="login_box">
      {isLoggedIn ?
        <div>
          <p>Welcome {loggedUser.name}</p>
          <button type="button" onClick={logoutSuccess}>Log Out</button>
        </div>
        :
        <GoogleLogin
          onSuccess={loginSuccess}
          onError={loginFailure}
          text="signup_with"
        />
      }
    </div>
  )
}

export default App;
