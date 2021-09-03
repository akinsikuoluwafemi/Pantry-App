import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'roo'
}

const rootReducer = combineReducers({
    pantry
})

export default rootReducer;

