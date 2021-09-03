import { combineReducers } from 'redux';
import pantry from './pantryReducer';
import cateredRecipe from './recipeReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['pantry', 'cateredRecipe']
}

const rootReducer = combineReducers({
	pantry,
	cateredRecipe,
});

export default persistReducer(persistConfig, rootReducer)


