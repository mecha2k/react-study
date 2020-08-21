import React from "react"
import { BrowserRouter } from "react-router-dom"
import Styled from "./styled"
import NavBar from "./navBar"

function StyledApp(props) {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Styled />
      </BrowserRouter>
    </div>
  )
}

export default StyledApp
