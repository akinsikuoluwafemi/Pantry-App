import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['pantry']
}

const rootReducer = combineReducers({
    pantry
})

export default persistReducer(persistConfig, rootReducer);

