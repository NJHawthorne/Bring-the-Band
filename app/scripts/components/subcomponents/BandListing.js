import React from 'react';
import results from './../../collections/Results.js';

const BandListing = React.createClass({
	handleVote: function(e) {
		console.log('You voted for something! You should be proud of yourself.');
		console.log(e.target);
		console.log(this.props.artist);
		console.log(this.props.thumbnail);
		let newVote = {
			artist: this.props.artist,
			thumbnail: this.props.thumbnail,
			votes: 1
		};
		results.create(newVote);
		console.log('Congrats on not fucking up');
	},
	render: function() {
		return (
				<div className="bandListings"
					key={this.props.key}>
					<img 
						src={this.props.thumbnail}
						ref="thumbnail"/>
					<p ref="artist"> {this.props.artist} </p>
					<button 
						className="voteUp"
						onClick={this.handleVote}>Vote!</button>
				</div>
		);
	}
});

export default BandListing;