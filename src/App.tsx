import React, { useContext } from 'react';

import { LayoutComponent as Layout } from './components/layout/Layout';

import { Login } from './components/modules/Modules';
import { AuthContext } from './store/AuthContext';
import * as actions from './store/actionTypes';
import { MessagesProvider } from './store/MessagesContext';
import './App.less';

const App: React.FC = () => {
  const { state, dispatch } = useContext(AuthContext);

  const handleSubmit = async (values: any) => {
    console.log(values);
    return dispatch({ type: actions.LOGED_IN, payload: values });
  };

  const handleLogOut = () => {
    setTimeout(() => {
      return dispatch({ type: actions.LOGED_OUT });
    }, 500);
  };

  return (
    <div className="App">
      {state.isLogedIn ? (
        <MessagesProvider>
          <Layout leave={handleLogOut} />
        </MessagesProvider>
      ) : (
        <Login submit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
