import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const rootReducer = combineReducers({
    pantry
})

export default rootReducer;

