import React, { createContext, useReducer } from 'react';
import * as actions from './actionTypes';

interface State {
  isLogedIn: boolean;
  text?: string;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = { isLogedIn: true, text: 'random' };

export const AuthContext = createContext<State | any>(initialState);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actions.LOGED_IN:
      return { ...state, isLogedIn: true };
    case actions.LOGED_OUT:
      return { ...state, isLogedIn: false };
    default:
      return state;
  }
};

export const AuthProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
