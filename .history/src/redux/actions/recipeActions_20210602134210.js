import pantryTypes from '../types';
import Axios from 'axios';


export const fetchRecipesPending = () => {
    return {
        type: pantryTypes.FETCH_RECIPES_PENDING
    }
}

export  const fetchRecipesSuccess = (recipes) => {
    return {
		type: pantryTypes.FETCH_ALL_RECIPES_SUCCESS,
		payload: recipes,
	};
}

export const fetchAsianRecipesSuccess = (recipes)

export  const fetchRecipesError = (error) => {
    return {
		type: pantryTypes.FETCH_RECIPES_ERROR,
		error: error,
	};
}

export const fetchRecipes = (url) => {
    return async dispatch  => {
        try {
            
            dispatch(fetchRecipesPending());
            const result = await Axios.get(url)
            dispatch(fetchRecipesSuccess(result.data.hits))
            console.log(result.data.hits)
        }
        catch(error){
            dispatch(fetchRecipesError(error))
        }
        
       
    }
}


export const getRecipeDetail = (recipe) => {
    return {
        type: pantryTypes.GET_RECIPE_DETAIL,
        payload: recipe
    }
}