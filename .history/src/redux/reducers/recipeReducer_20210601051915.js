import pantryTypes from '../types';


const INITIAL_STATE = {
    asianRecipesArr: [],
    medRecipesArr: [],
    allRecipesArr: [],
    favRecipesArr: [],
    cateredRecipesDetail: [],
    pending: false,
    error: null
};

const recipeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case pantryTypes.FETCH_RECIPES_PENDING:
            return {
                ...state,
                pending: true
            }
        case pantryTypes.FETCH_RECIPES_SUCCESS:
            return {
				...state,
                pending: false,
                allRecipesArr: action.payload
			};
        
        default:
            return state;
    }
}

