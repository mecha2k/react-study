import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import ReactRef from "./ReactRef"

const StyleButton = styled.button`
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 6px;
  padding: 6px 12px;
  outline: none;

  &:hover {
    color: white;
    background-color: palevioletred;
  }

  &:active {
    color: white;
    background-color: palevioletred;
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

const StyleInput = styled.input`
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 6px;
  padding: 6px 12px;
  outline: none;

  /* &:hover,
  &:focus {
    color: white;
    background-color: palevioletred;
    border: 2px solid palevioletred;
  } */

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

function Reacthook(props) {
  const [counta, setCounta] = useState({ count1: 0, count2: 0 })
  const [show, setShow] = useState(true)

  // useEffect(() => {
  //   const onMouseMove = (e) => console.log(e)
  //   window.addEventListener("mousemove", onMouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove)
  //   }
  // }, [])

  const [email, setEmail] = useState("")
  const [passwd, setPasswd] = useState("")

  useEffect(() => console.log(email), [email])

  const inputRef = useRef()
  const hello = useRef(() => console.log("Hello Ref...!"))

  return (
    <div>
      <StyleButton onClick={() => setShow(!show)} style={{ margin: "0 10px" }}>
        {show ? "hide message" : "show message"}
      </StyleButton>
      {show && <ReactRef />}

      <p>
        count1: {counta.count1}, count2: {counta.count2}
      </p>
      <StyleButton
        onClick={() => setCounta({ count1: counta.count1 + 1, count2: counta.count2 + 2 })}>
        click me
      </StyleButton>
      <p>Input filed coding...</p>
      <StyleInput
        ref={inputRef}
        type="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyleInput
        type="password"
        name="password"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
      />
      <StyleButton
        onClick={() => {
          inputRef.current.focus()
          hello.current()
        }}>
        {"focus"}
      </StyleButton>
    </div>
  )
}

export default Reacthook
