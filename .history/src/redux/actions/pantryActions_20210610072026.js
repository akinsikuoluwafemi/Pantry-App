import pantryTypes from '../types';



export const createPantryItem = (food) => {
    return {
        type: pantryTypes.CREATE_PANTRY_ITEM,
        payload: food
    }
}

export const removePantryItem = (food) => {
    return {
        type: pantryTypes.REMOVE_PANTRY_ITEM,
        payload: food
	};
}

export const editPantryItem = (food) => {
    return {
        type: pantryTypes.EDIT_PANTRY_ITEM,
        payload: food
	};
}


export const setQueryField = (text) => {
    return {
        type: pantryTypes.SET_QUERY,
        payload: text
    }
}

export const setItemName = (text) => {
    return {
        type: pantryTypes.SET_ITEM_NAME,
        payload: text
    }
}

export const filteredPantryChip = (category) => {
    return {
        type: pantryTypes.FILTER_PANTRY_CHIP,
        payload: category
    }
}

export const getSinglePantryDetail = (food) => {
    return {
        type: pantryTypes.GET_PANTRY_DETAIL,
        payload: food
    }
}

export const addToCategory = (name) => {
    alert('from action')
    return {
		type: pantryTypes.ADD_TO_CATEGORY,
		payload: name,
	};
}