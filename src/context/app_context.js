import React,{useContext,useReducer} from 'react';
import reducer from '../reducers/app_reducer';
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from '../actions';

const initialState = { isOpen : false }

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const openSideBar = () => {
        console.log("Open")
        dispatch({type:SIDEBAR_OPEN})
        
    }
    const closeSideBar = () => {
        console.log("Open")
        dispatch({type:SIDEBAR_CLOSE})
        
    }

    return(
        <AppContext.Provider value={{...state,openSideBar,closeSideBar}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}
