import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper, MakeStore } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import posts from './reducers';
import { IState, ActionTypes } from './types';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  posts,
});

const reducer = (state: IState, action: ActionTypes) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.posts.length) nextState.posts = state.posts; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const makeStore: MakeStore<IState> = () =>
  createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper<IState>(makeStore);
