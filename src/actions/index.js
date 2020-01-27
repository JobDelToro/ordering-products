import orderingApi from '../apis/orderingApi';

export const fetchCategories = () => async dispatch => {
	
	const response = await orderingApi.get('/v400/en/demo/business/41');
	
	dispatch({ type: 'FETCH_CATEGORIES', payload: response.data.result.categories });
};

export const searchProductsByName = (products = '') => {
	
	return { type: 'SEARCH_PRODUCTS', payload: products };
};

export const getOrderProducts = (newOrder) => (dispatch, getState) =>{
	// getState().orders.length === 0 ? [getState().orders, newOrder.payload] : getState().orders.map(order =>{ 
	// 				if(order.order.product.id === newOrder.payload.product.id){ 
	// 					return { ...order.order, quantity: order.order.quantity + 1 } 
	// 				} else { 
	// 					return newOrder.payload;
	// 				} 
	// 			})
	//
	switch(newOrder.type) {
			
		case 'SELECT_PRODUCT':
			
			const filteredProducts = getState().orders.filter(order => { return order.product.id !== newOrder.payload.id });
				
				return dispatch({ 
				type: 'GET_ORDER_PRODUCTS', 
				payload:  [ ...filteredProducts, { product: newOrder.payload } ] });
			
		case 'UNSELECT_PRODUCT':
			
			return dispatch({ type: 'GET_ORDER_PRODUCTS', payload: getState().orders.filter(order => order.product !== newOrder.payload ) });
			
		default:
			
			return getState().orders;
	}
};

export const selectProduct = (order = {}) => async(dispatch, getState) => {
	
	//let quantity = 1;
	const response = await orderingApi.get(`/v400/en/demo/business/41/categories/${order.category_id}/products/${order.id}`);
	
	response.data.result = { ...response.data.result, quantity: response.data.result.quantity + 1};
	
	getState().orders.forEach(order => {
		if(order.product.id === response.data.result.id) {
			response.data.result = { ...response.data.result, quantity: order.product.quantity + 1};
		}
	});
	
	return dispatch(getOrderProducts({ type: 'SELECT_PRODUCT', payload: response.data.result }));
};

export const unselectProduct = (order = {}) => dispatch => {
	
	return dispatch(getOrderProducts({ type: 'UNSELECT_PRODUCT', payload: order }));
};