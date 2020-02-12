import { createStore } from "redux";
import reducers from './reducers';
import state from './state';

function configureStore(state = {authenticated: false}) {
  return createStore(reducers, state)
}

export default configureStore;