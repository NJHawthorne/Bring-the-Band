import React from 'react';

const SearchForm = React.createClass({
	handleSearch: function(e) {
		e.preventDefault();
		// "https://api.spotify.com/v1/search?q={this.ref.search}*&type=artist"
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