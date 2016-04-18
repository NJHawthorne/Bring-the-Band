import React from 'react';
import results from './../../collections/Results.js';

const VoteContents = React.createClass({
	getInitialState: function() {
		return {
			results: []
	},
	componentDidMount: function() {
		results.on('change', ()=> {
			this.setState({results: results})
		});
		results.fetch();
	},
	render: function() {
		const voteResults = this.state.results.map((val, i, arr) => {
			return (
				<VoteEntry 
					key={val.get('id')}
					artist={val.get('artist')}
					thumbnail={val.get('thumbnail')}
					votes={val.get('votes')}/>
			)
		});
		return (
			{voteResults}
		)
	}
});

export default VoteContents;