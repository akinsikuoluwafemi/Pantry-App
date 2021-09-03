import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import { persi} from 'redux-persist';

const rootReducer = combineReducers({
    pantry
})

export default rootReducer;

