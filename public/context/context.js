import { createContext, useContext, useReducer} from 'react';


const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

function reducer(state, action) {

  switch(action.type) {
    case 'UPDATE_COLOR_WITH_PAYLOAD':
      return action.payload;
    case 'UPDATE_COLOR_INTO_REDUCER':
      action.color = 'green'
      action.text = 'new text from reducer'
      return action;
    default:
      return state
    }
}


export function AppWrapper({ children }) {
  const initialState = {color: 'red',text: 'new text new me'}
  const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
    );
  }
