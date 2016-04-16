import React from 'react';
import {Link} from 'react-router';

const Footer = React.createClass({
	render: function () {
		return (
			<footer>
				<Link to="/">BtB Venue</Link>
				<Link to="/search">Find Bands</Link>
				<Link to="/results">See Results</Link>
				<ul>
					<li>Contact Us</li>
					<li>Terms and Conditions</li>
					<li>About Us</li>
					<li>Copyright Info</li>
					<li>Helpful Links</li>
					<li>Swag</li>
				</ul>
			</footer>
		)
	}
});

export default Footer;