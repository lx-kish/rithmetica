import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MultiplicationTab from './pages/multiplication-tab/multiplication-tab.page';
import AdditionSubtraction from './pages/addition-subtraction/addition-subtraction.page';

/**
 * router adapted for github pages, see detailed eplanations at:
 * https://stackoverflow.com/questions/57883297/deploying-reactjs-website-on-github-pages-with-routing-results-in-404-error-on-r
 * https://github.com/facebook/create-react-app/issues/1765
 */
const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={AdditionSubtraction} />
			<Route path="/multiplication-tab" exact component={MultiplicationTab} />
			<Route path="/addition-subtraction" exact component={AdditionSubtraction} />
		</Switch>
	);
};

export default Routes;
