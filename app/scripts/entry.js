// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import HomePage from './components/HomePage.js';
import SearchPage from './components/SearchPage.js';
// import VotesPage from './components/VotesPage.js';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={HomePage}/>
		<Route path="/search" component={SearchPage}/>
	</Router>
);


render(
  router,
  document.getElementById('app')
);
