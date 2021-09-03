import pantryTypes from '../types';


const fetchRecipesPending = () => {
    return {
        type: pantryTypes.FETCH_RECIPES_PENDING
    }
}

const fetchRecipesSuccess = (recipes) => {
    return {
        type: pantryTypes.FETCH_RECIPES_SUCCESS,
        payload: recipes
    }
}

const fetchRecipesError = (error) => {
    type: 
}