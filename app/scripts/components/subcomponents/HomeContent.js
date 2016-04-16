import React from 'react';
import {Link} from 'react-router';

const HomeContent = React.createClass({
	render: function() {
		return (
			<section>
				<div className="contentBox">
					<h2>Search for the bands you want to see!</h2>
					<p>At our venue, we want to bring you the best
					   possible experience by showcasing the artists
					   you want to see. With that in mind, we decided
					   to let our fans decide what shows we offer
					   and who we try to set up shows for. Click the
					   button below and vote for who you want to see!</p>
					<Link className="homeButton" to="/search">Find Bands</Link>
				</div>
				<div className="contentBox">
					<h2>See what other people have voted for so far!</h2>
					<p>Hooking up to Spotify, we've set up a voting system
					so that you can select the artists you want to see live.
					Click the button below to see what you guys have selected
					so far!</p>
					<Link className="homeButton" to="/results">See Results</Link>
				</div>
			</section>
		);
	}
});

export default HomeContent;