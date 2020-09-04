import React, { useState, useContext, useMemo } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { UserContext } from "./Context"

function Index() {
  const { value, setValue } = useContext(UserContext)
  return (
    <div>
      <h2>Home</h2>
      <div> {value} </div>
      <button onClick={() => setValue("hey")}>change value </button>
    </div>
  )
}

function About() {
  const { value, setValue } = useContext(UserContext)
  return (
    <div>
      <h2>Home</h2>
      <div> {value} </div>
    </div>
  )
}

function AppRouter(props) {
  const [value, setValue] = useState("hello from the context")
  const provideValue = useMemo(() => ({ value, setValue }), [value, setValue])

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

        <UserContext.Provider value={{ value, setValue }}>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  )
}

export default AppRouter
