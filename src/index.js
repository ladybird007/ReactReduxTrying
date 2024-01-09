// import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';
import App from './components/app.js';

const store = createStore(reducer);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)


// const bindActionCreators = (creator, dispatch) => (...args) => { вбудова в redux
//   dispatch(creator(...args));
// }

// const decDispatch = bindActionCreators(dec, dispatch);
// const incDispatch = bindActionCreators(inc, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});



//let state = reducer(undefined, {});

//state = reducer(state, {type: 'INC'});
//console.log(state);
//state = reducer(state, {type: 'INC'});
//console.log(state);