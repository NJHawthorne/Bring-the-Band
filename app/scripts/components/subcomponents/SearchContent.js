import React from 'react';
import $ from 'jquery';
import results from './../../collections/Results.js';

// "https://api.spotify.com/v1/search?q={this.refs.search.value}*&type=artist"

const SearchContent = React.createClass({
	getInitialState: function() {
		return {
			results: []
		}	
	},
	handleSearch: function(e) {
		e.preventDefault();
		let search = this.refs.search.value;
		this.searchRequest = $.get("https://api.spotify.com/v1/search?q="+search+"*&type=artist", function(bandData) {
			let bandList = bandData.artists;
			// newResults = bandList.items.map(function(artists, i, arr) {
			// 	return {
			// 		name: artists.name,
			// 		url: artists.images
			// 	};
			// });
			// console.log(newResults);
			// console.log(this.state);
			this.setState({
				results: bandList.items
			});
		// I'll be honest, this is the only thing I don't fully 
		// understand. I know that 'this' inside of the ajax requests
		// sets 'this' to the AJAX request itself, so I know that 
		// this gets around that, but I still don't fully know why
		// bind gets around this.
		}.bind(this));
		// this.setState(function(previousState) {
		// 	console.log(previousState);
		// 	return {results: previousState.results.push(newResults)};
		// });
		// console.log(this.state);
		// console.log(this.state.results);
	},
	handleVote: function() {
		console.log('You voted for something! You should be proud of yourself.');
		console.log(this.refs.artist);
		console.log(this.refs.thumbnail);
		let newVote = {
			artist: this.refs.artist,
			thumbnail: this.refs.thumbnail,
			votes: 1
		};
		results.create(newVote);
		console.log('Congrats on not fucking up');
	},
	render: function() {
		const bandListings = this.state;
		const totalListings = [];
		totalListings.push(bandListings.results);
		const eachListing = (totalListings[0]).map((val, i, arr) => {
			if(val.images == false) {
				val.images.push({url: "http://vignette3.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013"});
			}
			return (
				<div className="bandListings"
					key={val.id}>
					<img 
						src={val.images[0].url}
						ref="thumbnail"/>
					<p ref="artist"> {val.name} </p>
					<button 
						className="voteUp"
						onClick={this.handleVote}>Vote!</button>
				</div>
			)
		});
		return (
			<section>
				<form
					onSubmit = {this.handleSearch}>
					<input
						type="text"
						placeholder="Search for bands..."
						ref="search" />
					<input 
						type="submit" />
				</form>
				<header>Showing {this.state.results.length} results</header>	
				{eachListing}	
			</section>
		)
	}
});

export default SearchContent;