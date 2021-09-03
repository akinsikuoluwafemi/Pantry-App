import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';


export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
    rootReducer,szdAQZZ
        initialState,
        composeEnhancers()
    )
}