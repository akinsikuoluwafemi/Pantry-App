import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

const store = createStore(rootReducer, )


export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
    rootReducer,
        initialState,
        composeEnhancers()
    )
}

export const persistor = persistStore(configureStore());