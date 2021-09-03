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
        type: pantryTypes.fetchRecipesError,
        error: error
    }
}

export const fetchRecipes = async (url) => {
    return dispatch => {
        dispatch(fetchRecipesPending());

    }
}


export const getRecipeDetail = (recipe) => {
    return {
        type: pantryTypes.GET_RECIPE_DETAIL,
        payload: recipe
    }
}