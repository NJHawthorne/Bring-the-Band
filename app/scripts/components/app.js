import React from 'react';
import Nav from './subcomponents/NavBar.js';
import Footer from './subcomponents/Footer.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<Nav />
				{this.props.children}
				<Footer />
			</section>
		);
	}
});