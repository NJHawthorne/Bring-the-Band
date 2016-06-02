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
		//fetching the models that already have votes
		this.state.results.on('update', () => {
			this.setState({results: this.state.results});
		});
		this.state.results.fetch();
	},
	render: function() {
		//storing the search results from Spotify
		const totalListings = [];
		totalListings.push(this.state.searchResults);
		const eachListing = (totalListings[0]).map((val, i, arr) => {
			//giving the search results an "image" in case they didn't have one
			if(val.images == false) {
				val.images.push({url: "http://vignette3.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013"});
			}
			//passing all the search data as props into the subcomponent
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
		//creating the ajax request to Spotify's api so results can be displayed
		let search = this.refs.search.value;
		this.searchRequest = $.get("https://api.spotify.com/v1/search?q="+search+"*&type=artist", function(bandData) {
			let bandList = bandData.artists;
			this.setState({
				searchResults: bandList.items
			});
		}.bind(this));
	},
	handleVote: function(newVote) {
		//making a variable to save some time later
		let upvotedArtists = this.state.results.models;
		//making a flag variable in case, in their search, they upvote an entry that already has votes
		let existingVote = false;
		for (var i = 0; i < upvotedArtists.length; i++) {
			//checking to see if the artist they're voting for has already been voted for
			if(upvotedArtists[i].get('artist') === newVote.artist) {
				let updatedBand = this.state.results.get(upvotedArtists[i].id);
				//updating the model with one additional vote
				updatedBand.save({
					votes: updatedBand.get('votes') + 1
				});
				//setting the flag to true so a new model isn't created
				existingVote = true;
			}
		}
		//checking to see if a new model needs to be made
		if(!existingVote) {
			this.state.results.create({
				artist: newVote.artist,
				thumbnail: newVote.thumbnail,
				votes: 1
			});
		}
	}
});

export default SearchContent;