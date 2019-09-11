import React, { useReducer, useState } from "react";

const initialState = {
  toDos: []
}
const ADD = "add";

const reducer = (state, action) => {
  switch(action.type) {
    case ADD:
      return { toDos: [...state.toDos, {text: action.payload}] };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState();
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo })
  }
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
        {state.toDos.map((toDo, index) => <li key={index}>{toDo.text}</li> )}
      </ul>
    </>
  )
}

export default App;


// import React, {useState} from "react";
// import Screen from "./Screen";
// import Lang from "./context";
// import translations from "./translations"
// function App() {
//   return (
//     <Lang defaultLang="en" translations={translations}>
//       <Screen />
//     </Lang>
//   )
// }

// export default App;

