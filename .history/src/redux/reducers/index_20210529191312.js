import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { persistReducer } from 'redux-persist';

export default = combineReducers({
    pantry
})

export default rootReducer;

