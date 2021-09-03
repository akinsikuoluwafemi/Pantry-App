import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { persistReducer } from 'redux-persist';

const rootReduce = combineReducers({
    pantry
})

export default rootReducer;

