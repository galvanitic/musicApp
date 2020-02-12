import { createStore } from "redux";
import reducers from './reducers';

function configureStore(state = {authenticated: false}) {
  return createStore(reducers, state)
}

export default configureStore;