import React from 'react';
import HomeContent from './subcomponents/HomeContent.js';

const HomePage = React.createClass({
	render: function() {
		return (
			<main> 
				<HomeContent />
			</main>
		)	
	}
});

export default HomePage;