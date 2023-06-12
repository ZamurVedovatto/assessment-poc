import { createContext, useReducer } from "react";
import { IUserInfo } from "./../types/Types";

export const AppContext = createContext();

interface IAppState {
  counter: number;
  users: IUserInfo[];
}

const appState: IAppState = {
  counter: 0,
  users: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        counter: state.counter++,
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        counter: state.counter--,
      };
    case "RESET_COUNTER":
      return {
        ...state,
        counter: 0,
      };
    case "FETCH_USERS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
};

export const AppProvider = ({ children }) => {
  const value = useReducer(appReducer, appState);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// import { createContext, useContext } from "react";
// import { UserInfo } from "./../types/Types";

// export type GlobalContent = {
//   data: UserInfo[];
//   setCopy: () => void;
// };

// export const GlobalContext = createContext();

// export const useGlobalContext = () => useContext(GlobalContext);
