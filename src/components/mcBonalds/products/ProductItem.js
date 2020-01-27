import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct, unselectProduct} from '../../../actions';

class ProductItem extends Component {
	
	
	renderAddDeleteButton(product) {
		
		if(this.props.isOrdered) {
		   return (
			    <div>
				   <p>X {this.props.quantity}</p>
				   <button onClick={() => this.props.unselectProduct(product)} className="ui red basic button">Remove</button>
				</div>
		   );
		} else {
		   return <button onClick={() => this.props.selectProduct(product)} className="ui green basic button">Add</button>;
		}
	}
	
	render() {
		
		const { product } = this.props;
		
		if(!product){
			return null
		}
		
		return (
			<div className="ui card">
				<img className="ui mini image" alt="logo" src={product.images}></img>
				<div className="content">
					<div className="description">
						<h4>{product.name}</h4>
						<p>Price $: {product.price}</p>
						{this.renderAddDeleteButton(product)}
					</div>
				</div>
			</div>
		);
	}
	
}

const mapStateToProps = (state) => {
	return { 
		searchProducts: state.searchProducts,
		orders: state.orders
	};
}

export default connect(
	mapStateToProps,
	{ selectProduct, unselectProduct}
)(ProductItem);