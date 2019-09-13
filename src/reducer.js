import uuid from "uuid/v4";
import { ADD, DEL, COMPLETE, UNCOMPLETE } from "./actions";

export const initialState = {
    toDos: [],
    completed: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case ADD:
            return { ...state, toDos: [...state.toDos, {text: action.payload, id: uuid()}] };
        case DEL:
            return { ...state, toDos: state.toDos.filter(toDo => toDo.id !== action.payload) };
        case COMPLETE: 
            const target = state.toDos.find(toDo => toDo.id === action.payload);
            
            return {
                ...state, 
                toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
                completed: [...state.completed, {...target}]
            }
        case UNCOMPLETE: 
            const atarget = state.completed.find(toDo => toDo.id === action.payload);
            return {
                ...state, 
                completed: state.completed.filter(toDo => toDo.id !== action.payload),
                toDos: [...state.toDos, {...atarget}]
            }
        default:
        throw new Error();
    }
}

export default reducer;

