// import { createStore, compose, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import rootReducer from './reducers';
// import { persistStore } from 'redux-persist';
// import { composeWithDevTools } from 'redux-devtools-extension';


// const middlewares = [logger];




// const store = createStore(
// 	rootReducer,
// 	applyMiddleware(...middlewares),
// );

// export default store;

// // export default function configureStore(initialState){
// //     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// //     return createStore(
// //     rootReducer,
// //         initialState,
// //         composeEnhancers()
// //     )
// // }

// // export const persistor = persistStore(configureStore());



import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = [logger];

const middlewareEnhancers = applyMiddleware(...middle)


const store = createStore(
	rootReducer,
	applyMiddleware(...middlewares),
);

export default store;

// export default function configureStore(initialState){
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//     return createStore(
//     rootReducer,
//         initialState,
//         composeEnhancers()
//     )
// }

// export const persistor = persistStore(configureStore());