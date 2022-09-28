import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MultiplicationTab from './pages/multiplication-tab/multiplication-tab.page';
import Arithmetic from './pages/arithmetic/arithmetic.page';
import Fractions from './pages/fractions/fractions.page';

/**
 * router adapted for github pages, see detailed eplanations at:
 * https://stackoverflow.com/questions/57883297/deploying-reactjs-website-on-github-pages-with-routing-results-in-404-error-on-r
 * https://github.com/facebook/create-react-app/issues/1765
 */
const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Arithmetic} />
			<Route path="/multiplication-tab" exact component={MultiplicationTab} />
			<Route path="/arithmetic" exact component={Arithmetic} />
			<Route path="/fractions" exact component={Fractions} />
		</Switch>
	);
};

export default Routes;
