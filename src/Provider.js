import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext(); //Prepares the DataLayer

export const Provider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); //Pulls from the data layer