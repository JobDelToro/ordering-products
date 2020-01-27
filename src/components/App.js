import React from 'react';
import Header from './Header';
import Store from './mcBonalds/Store';
import Order from './mcBonalds/Order';

const App = () => {

	return (
		<>
		  <Header />
		  <div className="ui grid">
			<div className="column ten wide">
				<Store />
			</div>
			<div className="column six wide">
				<Order />
			</div>
		  </div>
		</>
	);
		
};

export default App;