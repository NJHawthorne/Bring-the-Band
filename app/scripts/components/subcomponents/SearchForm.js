import React from 'react';

// "https://api.spotify.com/v1/search?q={this.ref.search}*&type=artist"

const SearchForm = React.createClass({
	handleSearch: function(e) {
		e.preventDefault();
		console.log({this.ref.search.value});
	}
	render: function() {
		return (
			<section>
				<form
					onSubmit: {this.handleSearch}>
					<input
						type="text"
						placeholder="Search for bands..."
						ref="search" />
					<input 
						type="submit" />
				</form>		
			</section>
		)
	}
});

export default SearchForm;