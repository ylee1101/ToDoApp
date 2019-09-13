import React, { createContext, useReducer, useContext } from "react";
import reducer, {initialState} from "./reducer";

const ToDosContext = createContext();
const ToDosProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ToDosContext.Provider value={{state, dispatch}}>
    {children}
  </ToDosContext.Provider>
}

export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
}

// export const useToDos = () => {
//   const { state: { toDos }
//   } = useContext(ToDosContext);
//   return toDos;
// }

// export const useCompleted = () => {
//   const { state: { completed }
//   } = useContext(ToDosContext);
//   return completed;
// }

export const useState = () => {
  const { state } = useContext(ToDosContext);
  return state;
}

export default ToDosProvider;


// import React, { useState, useContext, createContext } from "react";

// const LangContext = createContext();

// const Lang = ({defaultLang, children, translations }) => {
//   const [lang, setLang] = useState(defaultLang);
//   const hyperTranslate = (text) => {
//     if(lang === defaultLang) {
//       return text;
//     } else {
//       return translations[lang][text];
//     }
//   }
//   return <LangContext.Provider value={{setLang, t: hyperTranslate}}>
//     {children}
//   </LangContext.Provider>
// }

// export const useSetLang = () => {
//    const {setLang} = useContext(LangContext);
//    return setLang;
// }

// export const useT = () => {
//   const { t } = useContext(LangContext);
//   return t;
// }

// export default Lang;