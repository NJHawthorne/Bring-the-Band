import React from 'react';

const VoteEntry = React.createClass({
	addVote: function() {
		console.log(this.props.vote);
		return this.props.vote+1;
	},
	render: function() {
		return (
			<div
				key={this.props.key}>
				<img src={this.props.thumbnail}/>
				<h3>{this.props.artist}</h3>
				<h4>{this.props.votes}</h4>
				<button
					onClick={this.addVote}>Upvote!</button>
			</div>
		)
	}
});

export default VoteEntry;