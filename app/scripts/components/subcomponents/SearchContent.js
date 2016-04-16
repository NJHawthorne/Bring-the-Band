import React from 'react';
import $ from 'jquery';

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
		let newResults = [];
		$.get("https://api.spotify.com/v1/search?q="+search+"*&type=artist", function(bandData) {
			newResults = bandData.artists.items.map(function(artists, i, arr) {
				console.log(artists.name);
				if (artists.images == false){
					console.log("No image URL detected");
				} else {
					console.log(artists.images[0].url);
				}
				return {
					name: artists.name,
					url: artists.images
				};
			});
		});
		this.setState({results: newResults})
		console.log(this.state);
		console.log(this.state.results);
		// console.log(this.refs.search.value);
	},
	render: function() {
		const spotifyResults = this.state.bandData;
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
				<header>Showing some results</header>		
			</section>
		)
	}
});

export default SearchContent;