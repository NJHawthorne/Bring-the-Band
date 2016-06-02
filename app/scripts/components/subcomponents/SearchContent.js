import React from 'react';
import $ from 'jquery';
import BandListing from './BandListing.js';
import Results from './../../collections/Results.js';

// "https://api.spotify.com/v1/search?q={this.refs.search.value}*&type=artist"

const SearchContent = React.createClass({
	getInitialState: function() {
		return {
			searchResults: [],
			results: Results
		}	
	},
	componentDidMount: function() {
		this.state.results.on('update', () => {
			this.setState({results: this.state.results});
		});
		this.state.results.fetch();
	},
	render: function() {
		const totalListings = [];
		totalListings.push(this.state.searchResults);
		const eachListing = (totalListings[0]).map((val, i, arr) => {
			if(val.images == false) {
				val.images.push({url: "http://vignette3.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013"});
			}
			return (
				<BandListing 
					key={val.id}
					artist={val.name}
					thumbnail={val.images[0].url}
					handleVote={this.handleVote} />
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
				<header>Showing {this.state.searchResults.length} results</header>	
				{eachListing}	
			</section>
		)
	},
	handleSearch: function(e) {
		e.preventDefault();
		let search = this.refs.search.value;
		this.searchRequest = $.get("https://api.spotify.com/v1/search?q="+search+"*&type=artist", function(bandData) {
			let bandList = bandData.artists;
			this.setState({
				searchResults: bandList.items
			});
		}.bind(this));
	},
	handleVote: function(newVote) {
		let upvotedArtists = this.state.results.models;
		for (var i = 0; i < upvotedArtists.length; i++) {
			if(upvotedArtists[i].get('artist') === newVote.artist) {
				console.log('There was a match');
				let updatedBand = this.state.results.get(upvotedArtists[i].get('id'));
				console.log(updatedBand);
				// updatedBand.save({
				// 	votes: (upvotedArtists[i].get('votes') + 1)
				// })
			}
		}
	}
});

export default SearchContent;