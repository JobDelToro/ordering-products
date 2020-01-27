import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ category, searchProducts }) => {
	
	const filteredProducts = category.products.filter(product => {
		return product.name.toLowerCase().includes(searchProducts);
	});
	
	const renderProductsList = filteredProducts.map( product => {
			return (
				<ProductItem product={product} key={product.id}/>

			);
	});
	
	const renderCategoryName = () => {

		if (filteredProducts.length === category.products.length) {
			return <h2 className="ui right floated header">{category.name}</h2>
		} else {
			return <h6 className="ui right floated header">{category.name}</h6>;
		}
	};
	
	return (
		<div className="ui segment">
			{renderCategoryName()}
			<div>{renderProductsList}</div>
		</div>
	);
};

export default ProductList;