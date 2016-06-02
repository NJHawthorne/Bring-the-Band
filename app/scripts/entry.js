// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/app.js'
import HomePage from './components/HomePage.js';
import SearchPage from './components/SearchPage.js';
import VotesPage from './components/VotesPage.js';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage}/>
			<Route path="/search" component={SearchPage}/>
			<Route path="/results" component={VotesPage}/>
		</Route>
	</Router>
);


ReactDOM.render(
  router,
  document.getElementById('app')
);
