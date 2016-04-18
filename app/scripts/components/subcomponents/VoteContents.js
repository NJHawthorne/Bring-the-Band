import React from 'react';
import results from './../../collections/Results.js';
import VoteEntry from './VoteEntry.js';

const VoteContents = React.createClass({
	getInitialState: function() {
		return {
			results: []
		}
	},
	componentDidMount: function() {
		results.on('add', ()=> {
			this.setState({results: results})
		});
		results.fetch();
	},
	render: function() {
		let votes = this.state.results;
		console.log(votes);
		const voteResults = votes.map((val, i, arr) => {
			return (
				<VoteEntry 
					key={val.get('id')}
					artist={val.get('artist')}
					thumbnail={val.get('thumbnail')}
					votes={val.get('votes')}/>
			)
		});
		return (
			<div>Hi!</div>
		)
	}
});

export default VoteContents;