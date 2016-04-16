import React from 'react';
import NavBar from './subcomponents/NavBar.js';
import SearchContent from './subcomponents/SearchContent.js';
import Footer from './subcomponents/Footer.js';

const SearchPage= React.createClass({
	render: function() {
		return (
			<main>
				<NavBar />
				<SearchContent />
				<Footer />
			</main>
		)
	}
});

export default SearchPage;