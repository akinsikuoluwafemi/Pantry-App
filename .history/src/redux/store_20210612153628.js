import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);


} else
{
    
}





 const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store)

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


