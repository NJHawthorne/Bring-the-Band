import React from 'react';

const VoteEntry = React.createClass({
	addVote: function() {
		console.log(this.props.votes);
	},
	render: function() {
		return (
			<div>
				<img src={this.props.thumbnail}/>
				<h3>{this.props.artist}</h3>
				<h4>{this.props.votes}</h4>
				<button
					onClick={this.addVote} />
			</div>
		);
	}
});

export default VoteEntry;