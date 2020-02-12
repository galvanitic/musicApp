import React from 'react';
// import logo from './logo.svg';
import LogIn from './containers/Login';
import { Provider } from "react-redux";
// import store from './redux/store';
import configureStore from "./redux/store";
// import { authenticate, logOff } from "./actions/index";

function App() {
  return (
    <Provider store={configureStore()}>
    <div className="App">
      <LogIn />
    </div>
    </Provider>
  );
}

export default App;
