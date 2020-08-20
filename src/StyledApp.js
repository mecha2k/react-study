import React from "react"
import { Button, TomButton } from "./App.styled"

const styleCSS = {
  background: "transparent",
  border: "2px solid blue",
  borderRadius: "5px",
  color: "blue",
  margin: "10px",
  padding: "10px"
}

function StyledApp(props) {
  return (
    <div>
      <Button>Styled button</Button>
      <Button primary>Styled button</Button>
      <TomButton>Tomato styled button</TomButton>
      <button style={styleCSS}>CSS styled button</button>
    </div>
  )
}

export default StyledApp
