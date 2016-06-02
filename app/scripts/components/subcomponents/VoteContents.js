import React from 'react';
import results from './../../collections/Results.js';
import VoteEntry from './VoteEntry.js';

export default React.createClass({
	getInitialState: function() {
		return {
			results: results
		}
	},
	componentDidMount: function() {
		this.state.results.on('update change', () => {
			this.setState({results: results})
		});
		results.fetch();
	},
	componentWillUnmount: function() {
		this.state.results.off('update change');
	},
	render: function() {
		let votes = this.state.results;
		const voteResults = votes.map((val, i, arr) => {
			return (
				<VoteEntry 
					key={val.get('_id')}
					artist={val.get('artist')}
					thumbnail={val.get('thumbnail')}
					votes={val.get('votes')} />
			);
		});
		return (
			<div>
				{voteResults}
			</div>
		);
	}
});