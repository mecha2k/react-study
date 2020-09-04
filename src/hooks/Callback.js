import React, { useState, useRef, useCallback } from "react"

const useCountRenders = function () {
  const renders = useRef(0)
  console.log("renders: ", renders.current++)
}

const Hello = React.memo((props) => {
  useCountRenders()

  return (
    <div>
      <button onClick={props.incre}>increment</button>
    </div>
  )
})

function Callback(props) {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((count) => count + 1), [setCount])

  return (
    <div>
      <Hello incre={increment} />
      <div>count: {count} </div>
    </div>
  )
}

export default Callback
