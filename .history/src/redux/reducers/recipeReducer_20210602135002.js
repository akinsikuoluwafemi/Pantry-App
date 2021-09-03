import pantryTypes from '../types';


const INITIAL_STATE = {
    asianRecipesArr: [],
    medRecipesArr: [],
    allRecipesArr: [],
    favRecipesArr: [],
    cateredRecipesDetail: [],
    pending: true,
    error: null
};

const recipeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
		case pantryTypes.FETCH_RECIPES_PENDING:
			return {
				...state,
				pending: true,
			};
		case pantryTypes.FETCH_ALL_RECIPES_SUCCESS:
			return {
				...state,
				pending: false,
				allRecipesArr: action.payload,
			};
		case pantryTypes.FETCH_ASIAN_RECIPES_SUCCESS:
			return {
				...state,
				
			}

		case pantryTypes.FETCH_MED_RECIPES_SUCCESS:
			return {
				...state,
				pending: false,
				medRecipesArr: action.payload,
			};

		case pantryTypes.FETCH_ASIAN_RECIPES_SUCCESS:
			return {
				...state,
				pending: false,
				asianRecipesArr: action.payload,
			};
		case pantryTypes.GET_RECIPE_DETAIL:
			return {
				...state,
				cateredRecipesDetail: action.payload,
			};

		default:
			return state;
	}
}

export default recipeReducer;