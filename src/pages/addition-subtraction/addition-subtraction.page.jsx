import React from 'react';

// import useClickOutside from '../../utils/use-click-outside/useClickOutside';
// import problems from './problems';

import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';
import Header from '../../components/headers/addition-subtraction/header.component';
import Settings from '../../components/settings/settings.component';
import Problems from '../../components/addition-subtraction/problems/problems.component';
import Footer from '../../components/footer/footer.component';

import problemController from '../../components/math/problems-controller';
// import * as problemController from '../../components/math/problems-controller';

import initialProblemSettings from './initial-problem-settings';

import useTraceUpdate from '../../utils/state-update-tracer/state-update-tracer';

const AdditionSubtraction = (props) => {
	/**
   * Single state hook useState for all the state properties
	 * 
	 * PROBLEM PARAMETRES: 
	 * operation: <addition>, <subtraction>
	 * missing: <result>, <missingFirst>, <missingLast>, <random>
	 * type: <up-to-10>, ...
	 * numberOfOperands: <Number>
	 * quantity: <Number>
   */

	const [ fullState, setFullState ] = React.useState({
		problemSettings: initialProblemSettings,
		colsPerRow: 2
	});

	// console.log(
	// 	'%c problemSettings from the fullState of addition-subtraction-page ===> ',
	// 	'color: orangered; font-weight: bold;',
	// 	fullState.problemSettings
	// );

	/**
	 * 
	 * @param {Object} settings - passing parameter from the settings component
	 * 
	 * For details see: 
	 * https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react
	 */
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
				<Settings sendData={getSettings} settings={fullState.problemSettings}/>
				<Problems problems={problemController(fullState.problemSettings)} columns={fullState.colsPerRow} />
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default AdditionSubtraction;
