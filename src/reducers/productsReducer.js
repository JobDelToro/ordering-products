export default (state = [], action) => {
	switch(action.type) {
	    case 'SEARCH_PRODUCTS': 
			return action.payload;
		case 'SELECT_PRODUCT':
			return action.payload;
		case 'UNSELECT_PRODUCT':
			return action.payload;

	    default:
		    return state;
	}
}