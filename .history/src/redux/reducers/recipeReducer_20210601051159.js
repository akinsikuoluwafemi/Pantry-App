import { SwitchCameraTwoTone } from '@material-ui/icons';
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
    SwitchCameraTwoTone()
}

