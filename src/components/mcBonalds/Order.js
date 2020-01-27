import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './products/ProductItem';

class Order extends  Component {
	
	renderProductList(orders){
		
		return orders.map((order, i) => {
			return <ProductItem key={order.product.id} product={order.product} quantity={order.product.quantity} isOrdered={true} />
			}
		);
	}
	
	orderTotal = (orders) => {
		
		let total = 0
		
		orders.forEach(order => {
			total += order.product.price * order.product.quantity;
		});
		
		return total;
	}
	
	checkout = () => {
		alert(`checkout by $: ${this.orderTotal(this.props.orders)}`);
		window.location.reload();
	}
	
	render() {
		if(this.props.orders.length === 0) {
			
			return (
				<div className="ui segment">
					<div className="ui segment">
						<h1 className="ui right floated header">Order</h1>
						<h3 className="ui gray top floated header">Your order is empty</h3>
						<img className="ui large image" alt="logo" src="https://orderingweb.ordering.co/templates/web/img/empty-cart.png"></img>
					</div>

				</div>
			);
		} else {
			
			return (
				<div className="ui segment">
					<div className="ui segment">
						<h1 className="ui right floated header">Order</h1>
						<h3 className="ui green top floated header">Your order at McBonalds</h3>
						{this.renderProductList(this.props.orders)}
					</div>
					<h3 className="ui top floated header">TOTAL $: {this.orderTotal(this.props.orders)}</h3>
					<button onClick={this.checkout} className="ui green huge button">Checkout</button>
				</div>
			);
		}
		
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.orders
	}
}

export default connect(
	mapStateToProps,
	null
)(Order);