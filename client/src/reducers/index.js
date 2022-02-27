import { combineReducers } from "redux";
import ProductReducer from './ProductReducer'
import OrderReducer from './OrderReducer'
import { reducer as reduxForm } from 'redux-form';
const rootReducer = combineReducers({
    orders: OrderReducer, 
    products: ProductReducer,
    form: reduxForm
})

export default rootReducer;