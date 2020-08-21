import React from "react"
import { BrowserRouter } from "react-router-dom"

import "./App.css"
import StyledApp from "./StyledApp"
import NavBar from "./navBar"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <StyledApp />
      </BrowserRouter>
    </>
  )
}

export default App
