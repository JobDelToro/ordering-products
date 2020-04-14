import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, searchProductsByName } from '../../actions';

import SearchBar from './SearchBar';
import ProductList from './products/ProductList';

class Store extends Component {
	
	componentDidMount() {
		this.props.fetchCategories();
	}
	
	renderCategoriesList(searchProducts) {
			return this.props.categories.map(category => {
				return <ProductList category={category} searchProducts={searchProducts} key={category.id}/>;
			});
	}
	
	onInputChange = (term) => {
		this.props.searchProductsByName(term);
	}
	
	render() {
		
		return (
			<div>
				<SearchBar onInputChange={this.onInputChange}/>
				<div className="ui segment">
					{this.renderCategoriesList(this.props.searchProducts)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		categories: state.categories,
		searchProducts: state.searchProducts
	};
}

export default connect(
	mapStateToProps, 
	{ fetchCategories, searchProductsByName }
)(Store);