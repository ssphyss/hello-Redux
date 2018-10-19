import { createStore, compose } from 'redux';
import reducer from './reducer';

// 使用中間件Redux-saga 引入
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

// 使用中間件Redux-thunk 引入
// import { applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';


// 4.=============== 使用中間件 Redux-saga  ===============
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers( applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas);

// // 3.=============== 不使用中間件  ===============
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers();
// const store = createStore(reducer, enhancer);


// // 2.=============== 使用中間件 Redux-thunk  ===============
// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
// );
// const store = createStore(reducer, enhancer);


// // 1.=============== 一開始 ===============
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk)
//     // applyMiddleware([thunk, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]),
// );

export default store;
