import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import orderReducer from './orderReducer';

export default combineReducers({
	categories: categoriesReducer,
	searchProducts: productsReducer,
	orders: orderReducer
});