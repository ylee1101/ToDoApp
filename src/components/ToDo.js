import React from "react";
import { COMPLETE, UNCOMPLETE, DEL } from "../actions";
import { useDispatch } from "../context";

export default ({text, id, isCompleted}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <span>
              {text}
            </span>
            <button onClick={() => dispatch({type: DEL, payload: id})}>Delete</button>
            <button onClick={() => dispatch({type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id})}>{isCompleted ? "Uncomplete" : "Complete"}</button>
          </li>
    )
}