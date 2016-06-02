import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
	render: function() {
		return (
			<nav>
				<Link to="/">{'BtB Venue'}</Link>
				<Link to="/search">{'Find Bands'}</Link>
				<Link to="/results">{'See Results'}</Link>
			</nav>
		);
	}
});

export default NavBar;