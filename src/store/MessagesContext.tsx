import React, { createContext, useReducer } from 'react';
import * as actions from './actionTypes';

type Message = {
  message: { text: string; author: string; date: string };
};
interface State {
  messages: Message[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  messages: [{ text: 'first message', author: 'Me', date: '55' }],
};

export const MessagesContext = createContext<State | any>(initialState);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actions.SEND_MESSAGE:
      return { ...state };

    default:
      return state;
  }
};

export const MessagesProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MessagesContext.Provider value={{ state, dispatch }}>
      {children}
    </MessagesContext.Provider>
  );
};
