import React, { useReducer, useState } from "react";
import reducer, {
  initialState,
  ADD,
  DEL,
  COMPLETE,
  UNCOMPLETE
} from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  }
  return (
    <>
      <h1>Add To Do</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Write To Do"
          value={newToDo}
          onChange={onChange}
        >
        </input>
      </form>
      <ul>
        <h3>To Dos</h3>
        {state.toDos.map((toDo) => (<li key={toDo.id}>
          <span>
            {toDo.text}
          </span>
          <button onClick={() => dispatch({type: DEL, payload: toDo.id})}>Delete</button>
          <button onClick={() => dispatch({type: COMPLETE, payload: toDo.id})}>Complete</button>
        </li> ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
          <h2>Completed</h2>
          {state.completed.map((toDo) => (
          <li key={toDo.id}>
            <span>
              {toDo.text}
            </span>
            <button onClick={() => dispatch({type: DEL, payload: toDo.id})}>Delete</button>
            <button onClick={() => dispatch({type: UNCOMPLETE, payload: toDo.id})}>Uncomplete</button>
          </li> ))}
          </>
        )}
      </ul>
    </>
  )
}

export default App;