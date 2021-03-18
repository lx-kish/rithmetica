import React from 'react';

// import useClickOutside from '../../utils/use-click-outside/useClickOutside';
// import problems from './problems';

import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';
import Header from '../../components/headers/addition-subtraction/header.component';
import Settings from '../../components/addition-subtraction/settings/settings.component';
import Problems from '../../components/addition-subtraction/problems/problems.component';
import Footer from '../../components/footer/footer.component';

import problemController from '../../components/math/problem-controller';

import useTraceUpdate from '../../utils/state-update-tracer/state-update-tracer';

const AdditionSubtraction = (props) => {
	/**
   * Single state hook useState for all the state properties
	 * 
	 * PROBLEM PARAMETRES: 
	 * operation: <addition>, <subtraction>
	 * missing: <result>, <missingFirst>, <missingLast>
	 * type: <up-to-10>, ...
	 * numberOfOperands: <Number>
	 * quantity: <Number>
   */

	const [ fullState, setFullState ] = React.useState({
		problemSettings: [
			{
				operation: 'addition',
				type: 'up to ten',
				missing: 'result',
				numberOfOperands: 2,
				quantity: 8
			}
		],
		colsPerRow: 2
	});

	// console.log(
	// 	'%c problemSettings from the fullState of addition-subtraction-page ===> ',
	// 	'color: orangered; font-weight: bold;',
	// 	fullState.problemSettings
	// );

	const getSettings = (settings) => {

		setFullState({
			...fullState,
			problemSettings: settings
		});
	};

	useTraceUpdate(props);

	// console.log('random numbers from addition-subtraction page ===> ', random(0, 99));

	return (
		<React.Fragment>
			<NavigationBar />
			<Header />
			<main className="problem__main">
				<Settings sendData={getSettings} />
				<Problems problems={problemController(fullState.problemSettings)} columns={fullState.colsPerRow} />
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default AdditionSubtraction;
