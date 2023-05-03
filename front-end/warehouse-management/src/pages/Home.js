
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"

export default function Home (props) {
  let [authMode, setAuthMode] = useState("signin")
 
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const navigate = useNavigate()

  const { setCurrentUser } = useContext(CurrentUser)
  const [credentials, setCredentials] = useState({
    user_name: '',
    password: '',
  })

  const [errorMessage, setErrorMessage] = useState(null)

  const [user, setUser] = useState({
    name: '',
    user_name: '',
    password: ''
  })
 
  async function handleSignInSubmit(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/authentication`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json()
    if (response.status === 200) {
      setCurrentUser(data.user)
      localStorage.setItem('token', data.token)
      switch (data.user.role_id) {
        case 0:
          navigate('/Manager');
          break;
        case 1:
          navigate('/Administrator');
          break;
        case 2:
          navigate('/Picker');
          break;
        default:
          navigate('/');
          break;
      }
    } else {
      setErrorMessage(data.message)
    }
  }

  async function handleSignUpSubmit(e) {
    e.preventDefault()
    console.log(user)
    await fetch(`http://localhost:5000/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    navigate.push(`/`)
  }

  if (authMode === "signin") {
    return (
      <div className="Home-form-container">
        <form className="Home-form" onSubmit={handleSignInSubmit}>
          <div className="Home-form-content">
            <h3 className="Home-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
                required
                onChange={e => setCredentials({ ...credentials, user_name: e.target.value })}
                name="user_name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                required
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                name="password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="/#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Home-form-container">
      <form className="Home-form" onSubmit={handleSignUpSubmit}>
        <div className="Home-form-content">
          <h3 className="Home-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={e => {
                  console.log('here')
                  setUser({ ...user, name: e.target.value })
                  console.log(user)
                }
              }
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="Username"
              onChange={e => setUser({ ...user, user_name: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              required
              className="form-control mt-1"
              placeholder="Password"
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="/#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}