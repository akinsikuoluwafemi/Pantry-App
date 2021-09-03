import pantryTypes from '../types';
import Axios from 'axios';


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
    return dispatch async => {
        dispatch(fetchRecipesPending());
        const result = await Axios.get(url)
    }
}


export const getRecipeDetail = (recipe) => {
    return {
        type: pantryTypes.GET_RECIPE_DETAIL,
        payload: recipe
    }
}