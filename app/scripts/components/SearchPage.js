import React from 'react';
import NavBar from './subcomponents/NavBar.js';
import SearchForm from './subcomponents/SearchForm.js';
import Footer from './subcomponents/Footer.js';

const SearchPage= React.createClass({
	render: function() {
		return (
			<main>
				<NavBar />
				<SearchForm />
				<Footer />
			</main>
		)
	}
});

export default SearchPage;