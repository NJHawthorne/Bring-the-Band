import React from 'react';
import NavBar from './subcomponents/NavBar.js';
import Footer from './subcomponents/Footer.js';
import VoteContents from './subcomponents/VoteContents.js';

const VotesPage = React.createClass({
	render: function() {
		return (
			<main>
				<NavBar />
				<VoteContents />
				<Footer />
			</main>
		)
	}
});

export default VotesPage;