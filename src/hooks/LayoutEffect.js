import React, { useState, useEffect, useRef, useLayoutEffect } from "react"
import styled, { css } from "styled-components"

const useFetch = function (url) {
  const mounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ data: null, loading: true })
    fetch(url)
      .then((x) => x.text())
      .then((x) => {
        console.log(x)
        if (mounted.current) {
          setTimeout(() => {
            setState({ data: x, loading: false })
          }, 2000)
        }
      })
  }, [url])

  return state
}

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 16px;
  font-family: D2Coding, 'Courier New', Courier, monospace;
`

const StyleButton = styled.button`
  background: transparent;
  border: 2px solid palevioletred;
  color: gray;
  margin: 6px;
  padding: 6px 12px;
  outline: none;
  width: 100px;

  &:active,
  &:focus,
  &:hover {
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

function ReactRef(props) {
  const [count, setCount] = useState(0)
  // const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(() => {
    console.log("localStorage: ", JSON.stringify(count))
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  const [rect, setRect] = useState({})
  const divRef = useRef()

  useLayoutEffect(() => setRect(divRef.current.getBoundingClientRect()), [data])
  console.log(divRef.current);

  const preStyle = {
    fontFamily: "D2Coding, sans-serif",
    fontSize: "12px",
    color: "red"
  }

  return (
    <StyleDiv>
      <div ref={divRef}> {data ? data : "loading..."} </div>
      <div>한글 표시 방법</div>
      <pre style={preStyle}> {JSON.stringify(rect, null, 2)} </pre>
      <div>
        count: {count}, loading: {JSON.stringify(loading)}
      </div>
      <StyleButton onClick={() => setCount(count + 1)}>increment</StyleButton>
    </StyleDiv>
  )
}

export default ReactRef
