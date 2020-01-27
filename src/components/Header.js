import React from 'react';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
	  <div className="ui small image">
		  <img alt="logo" src="https://orderingweb.ordering.co/templates/web/img/logo.png"></img>
		</div>
	  <div className="right menu">
		<button className="item">
		  <i className="home icon"></i>
		  Home
		</button>
		<button className="item">
		  <i className="tablet alternate icon"></i>
		  About
		</button>
		<button className="item">
		  <i className="hdd icon"></i>
		  Login
		</button>
	  </div>
	</div>
  );
};

export default Header;