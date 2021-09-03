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

export const fetchAsianRecipesSuccess = (recipes) => {
    return {
        type: pantryTypes.FETCH_ASIAN_RECIPES_SUCCESS,
        payload: recipes
    }
}

export const fetchMedRecipesSuccess = (recipes) => {
    return {
		type: pantryTypes.FETCH_MED_RECIPES_SUCCESS,
		payload: recipes,
	};
}

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
        }
        catch(error){
            dispatch(fetchRecipesError(error))
        }
        
       
    }
}

export const fetchMedRecipes = (url) => {
	return async (dispatch) => {
		try {
			dispatch(fetchRecipesPending());
			const result = await Axios.get(url);
			dispatch(fetchMedRecipesSuccess(result.data.hits));
		} catch (error) {
			dispatch(fetchRecipesError(error));
		}
	};
};


export const fetchAsianRecipes = (url) => {
	return async (dispatch) => {
		try {
			dispatch(fetchRecipesPending());
			const result = await Axios.get(url);
            dispatch(fetchAsianRecipesSuccess(result.data.hits));
		} catch (error) {
			dispatch(fetchRecipesError(error));
		}
	};
};


export const getRecipeDetail = (recipe) => {
    return {
        type: pantryTypes.GET_RECIPE_DETAIL,
        payload: recipe
    }
}

export const showFetchRecipeButton = () => {
	return {
		type: pantryTypes.SHOW_FETCH_RECIPE_BTN
	}
}

export const setRecipeQueryField = (text) => {
	return {
		type: pantryTypes.SET_RECIPE_QUERY,
		payload: text,
	};
};

export const addToFavourites = (recipe) => {
	return {
		type: pantryTypes.ADD_TO_FAVOURITE,
		payload: recipe
	};
}
export const addToFavourites = (recipe) => {
	return {
		type: pantryTypes.ADD_TO_FAVOURITE,
		payload: recipe,
	};
};