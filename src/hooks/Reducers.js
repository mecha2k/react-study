import React, { useState, useReducer } from "react"

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return { todos: [...state.todos, { text: action.text, completed: false }] }
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        )
      }
    default:
      return state
  }
}

function Reducers() {
  const [state, dispatch] = useReducer(reducer, { todos: [] })
  const [text, setText] = useState()

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({ type: "add-todo", text })
          setText("")
        }}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <pre> {JSON.stringify(state.todos, null, 2)} </pre>

      {state.todos.map((t, index) => (
        <div
          key={t.text}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
          onClick={() => dispatch({ type: "toggle-todo", index })}>
          {t.text}
        </div>
      ))}
    </div>
  )
}

export default Reducers
