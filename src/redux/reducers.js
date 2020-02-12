// import { combineReducers } from 'redux';

export default (state, action) => {
  switch(action.type) {
    case 'AUTH':
      return {
        ...state,
        authenticated: action.payload
      }
    default:
      return state
  }
}

// export default combineReducers({authenticated});