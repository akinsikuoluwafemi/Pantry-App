import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux'


export default combineReducers({
    pantry
})


