import React from 'react';
// import logo from './logo.svg';
import LogIn from './containers/Login';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <LogIn />
    </div>
    </Provider>
  );
}

export default App;
