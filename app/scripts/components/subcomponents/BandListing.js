import React from 'react';
import results from './../../collections/Results.js';

const BandListing = React.createClass({
	handleVote: function(e) {
		let newVote = {
			artist: this.props.artist,
			thumbnail: this.props.thumbnail,
			votes: 1
		};
		results.create(newVote);
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