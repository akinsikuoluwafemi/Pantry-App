import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { } from 'redux-persist';

const rootReducer = combineReducers({
    pantry
})

export default rootReducer;

