import React, { useState, useEffect, useRef } from "react"
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

const StyleButton = styled.button`
  background: transparent;
  border: 2px solid lightgrey;
  color: gray;
  margin: 6px;
  padding: 6px 12px;
  outline: none;

  &:active {
    color: white;
    background-color: lightgrey;
  }

  ${(props) =>
    props.primary &&
    css`
      background: lightgrey;
      color: white;
    `}
`

function ReactRef(props) {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(() => {
    console.log("localStorage: ", JSON.stringify(count))
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  return (
    <div>
      <div> {data ? data : "loading..."} </div>
      <div>
        count: {count}, loading: {JSON.stringify(loading)}{" "}
      </div>
      <StyleButton onClick={() => setCount(count + 1)}>Click Ref...</StyleButton>
    </div>
  )
}

export default ReactRef
