import React from 'react';
import NavBar from './subcomponents/NavBar.js';
import Footer from './subcomponents/Footer.js';

const VotesPage = React.createClass({
	render: function() {
		return (
			<main>
				<NavBar />
				<Footer />
			</main>
		)
	}
});

export default VotesPage;