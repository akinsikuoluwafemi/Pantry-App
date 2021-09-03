import pantryTypes from '../types';


export const fetchRecipesPending = () => {
    return {
        type: pantryTypes.FETCH_RECIPES_PENDING
    }
}

export  const fetchRecipesSuccess = (recipes) => {
    return {
        type: pantryTypes.FETCH_RECIPES_SUCCESS,
        payload: recipes
    }
}

export  const fetchRecipesError = (error) => {
    return {
        types: pantryTypes.fetchRecipesError,
        error: error
    }
}

export const getRecipeDetail = (recipe) => {
    return {
        typep
    }
}