import React from 'react';
import $ from 'jquery';

// "https://api.spotify.com/v1/search?q={this.refs.search.value}*&type=artist"

const SearchContent = React.createClass({
	handleSearch: function(e) {
		e.preventDefault();
		let search = this.refs.search.value;
		$.get("https://api.spotify.com/v1/search?q="+search+"*&type=artist", function(data) {
			console.log(data);
		});
		console.log(this.refs.search.value);
	},
	render: function() {
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
			</section>
		)
	}
});

export default SearchContent;