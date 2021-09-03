import { cateredRecipes, pantryArr, categoryArr} from '../../data';
import pantryTypes from '../types';

const INITIAL_STATE = {
	query: '',
	pantryArr,
	pantryArrCopy: pantryArr,
	categoryArr,
	pantryDetail: [
		// {
		// 	id: 1,
		// 	category: 'meat and poultry',
		// 	name: 'whole chicken',
		// 	createdAt: '01/02/2021',
		// 	expiry: '21/03/2021',
		// 	weight: 5,
		// 	quantity: 2,
		// 	imageSrc:
		// 		'https://bloximages.newyork1.vip.townnews.com/newspressnow.com/content/tncms/assets/v3/editorial/f/df/fdf4f1fc-3a34-11ea-8bf2-231012c771c1/5e237114db416.image.jpg?resize=1200%2C792',
		// 	notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Iaculis enim, velit turpis eget. Fames erat mollis et, aliquam, pulvinar',
		// 	bool: true,
		// },
	],
	cateredRecipes,
	cateredRecipesDetail: [],
};


const pantryReducer = (state=INITIAL_STATE , action) => {
    switch(action.type){
        case pantryTypes.CREATE_PANTRY_ITEM:
			return {
				...state,
				pantryArrCopy: [action.payload, ...state.pantryArr],
			};
		case pantryTypes.REMOVE_PANTRY_ITEM:
			return {
				...state,
				pantryArrCopy: state.pantryArrCopy.filter(item => item.id !== action.payload.id)
			}
		case pantryTypes.EDIT_PANTRY_ITEM:
			return {
				...state,
				pantryArrCopy: state.pantryArrCopy.map(item => {
					return item.id === action.payload.id ? :item
				})
			}
		
        case pantryTypes.SET_QUERY:
            return { ...state, query: action.payload }
        case pantryTypes.FILTER_PANTRY_CHIP:
            if(action.payload.target.value === 'All'){
                return { ...state, pantryArrCopy: state.pantryArr };
            }else {
                return { ...state, pantryArrCopy: state.pantryArr.filter(item => item.category === action.payload.target.value) };
            }
        case pantryTypes.GET_PANTRY_DETAIL:
            return { ...state, pantryDetail: action.payload};
        default:
            return state;
    }
}

export default pantryReducer;