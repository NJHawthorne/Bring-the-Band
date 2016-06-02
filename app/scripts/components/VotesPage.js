import React from 'react';
import VoteContents from './subcomponents/VoteContents.js';

const VotesPage = React.createClass({
	render: function() {
		return (
			<main>
				<VoteContents />
			</main>
		);
	}
});

export default VotesPage;