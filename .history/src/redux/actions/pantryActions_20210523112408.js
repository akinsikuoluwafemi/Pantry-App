import pantryTypes from '../types';



export const createPantryItem = (food) => {
    return {
        type: pantryTypes.CREATE_PANTRY_ITEM,
        payload: food
    }
}

export const removePantryItem = (food) => {
    return {
        TYPE
    }
}

export const setQueryField = (text) => {
    return {
        type: pantryTypes.SET_QUERY,
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
