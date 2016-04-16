import React from 'react';
import NavBar from './subcomponents/NavBar.js';
import HomeContent from './subcomponents/HomeContent.js';
import Footer from './subcomponents/Footer.js';

const HomePage = React.createClass({
	render: function() {
		return (
			<main> 
				<NavBar />
				<HomeContent />
				<Footer />
			</main>
		)	
	}
});

export default HomePage;