import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MultiplicationTab from './pages/multiplication-tab/multiplication-tab.page';
import AdditionSubtraction from './pages/addition-subtraction/addition-subtraction.page';

// import PrivateRoute from './hoc/private-route/private-route.hoc';
// import PublicRoute from './hoc/public-route/public-route.hoc';


/**
 * router adapted for github pages, see detailed eplanations at:
 * https://stackoverflow.com/questions/57883297/deploying-reactjs-website-on-github-pages-with-routing-results-in-404-error-on-r
 */
const Routes = () => {
	return (
		<Switch>
			<Route path="/multiplay-react" exact component={MultiplicationTab} />
			{/* <Route exact path="/" render={() => <Redirect to="/multiplication-tab" />} /> */}
			<Route path="/multiplay-react/multiplication-tab" exact component={MultiplicationTab} />
			<Route path="/multiplay-react/addition-subtraction" exact component={AdditionSubtraction} />
		</Switch>
	);
};

export default Routes;
