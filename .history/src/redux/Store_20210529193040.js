import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	applyMiddleware(...middlewares),
	composeEnhancers()
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