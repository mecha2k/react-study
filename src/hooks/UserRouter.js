import React, { useState, useContext, useMemo } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { UserContext } from "./Context"

export const login = async function () {
  return {
    id: 3,
    username: "bob",
    email: "bob@cstory.com"
  }
}

function Index() {
  const { user, setUser } = useContext(UserContext)
  return (
    <div>
      <h2>Home</h2>
      <pre> {JSON.stringify(user, null, 2)} </pre>
      {user ? (
        <button
          onClick={() => {
            // call logout
            setUser(null)
          }}>logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login()
            setUser(user)
          }}>
          login
        </button>
      )}
    </div>
  )
}

function About() {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h2>About</h2>
      <pre> {JSON.stringify(user, null, 2)} </pre>
    </div>
  )
}

function UserRouter(props) {
  const [user, setUser] = useState(null)
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value={userValue}>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  )
}

export default UserRouter
