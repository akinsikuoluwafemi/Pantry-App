import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { persistReducer } from 'redux-persist';
import storage from 'red'

const rootReducer = combineReducers({
    pantry
})

export default rootReducer;

