/* eslint-disable @typescript-eslint/no-explicit-any */
// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'
// import rootReducer from './reducers';


// const composeEnhancers =
//   process.env.NODE_ENV !== 'production' &&
//   typeof window === 'object' &&
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const initStore = (initialState, options) => {
    let composeEnhancers = compose;

    //Check if function running on the sever or client
    if (true) {
        //Setup Redux Debuger
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }



    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(thunk) //Applying redux-thunk middleware
    ));

    return store;
};


export default initStore;