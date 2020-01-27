import React, { Component } from 'react';

class SearchBar extends Component {
	
	  onInputChange = event => {
		this.props.onInputChange(event.target.value);
	  };

	  render() {
		return (
		  <div className="search-bar ui segment">
			  <div className="ui form">
				  <div className="field">
					<label>Search Product</label>
					<input
					  type="text"
					  onChange={this.onInputChange}
					/>
				  </div>
			  </div>
		  </div>
		);
	  }
}

export default SearchBar;