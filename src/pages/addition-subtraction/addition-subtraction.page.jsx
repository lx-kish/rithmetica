import React from 'react';

import useClickOutside from '../../utils/use-click-outside/useClickOutside';
// import problems from './problems';

import Header from '../../components/headers/addition-subtraction/header.component';
import Settings from '../../components/addition-subtraction/settings/settings.component';
import Footer from '../../components/footer/footer.component';
import Problems from '../../components/addition-subtraction/problems/problems.component';

// import random from '../../components/math/randoms/random-integer-in-a-range';
// import problemGenerator from '../../components/math/problem-generators/addition-problem-generator';
import problemController from '../../components/math/problem-controller';
import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';

// import IconChevronDown from '../../components/icons-svg/icon-chevron-down.component';
import useTraceUpdate from '../../utils/state-update-tracer/state-update-tracer';

const AdditionSubtraction = (props) => {
	/**
     * Single state hook useState for all the state properties
     */
	const [ fullState, setFullState ] = React.useState({
		problemSettings: [
			{
				operation: 'addition',
				type: 'up to 10',
				missing: 'result',
				numberOfOperands: 2,
				quantity: 8
			}
		],
		colsPerRow: 2
		// open: false
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
		// console.log(fullState.problemSettings);
	};

	useTraceUpdate(props);

	/**
	 * problem parametres: 
	 * operation: <addition>, <subtraction>
	 * missing: <result>, <missingFirst>, <missingLast>
	 * type: <up-to-10>, ...
	 * numberOfOperands: <Number>
	 * quantity: <Number>
	 */

	// console.log('random numbers from addition-subtraction page ===> ', random(0, 99));

	return (
		<React.Fragment>
			<NavigationBar />
			{/* <NavigationBar open={fullState.open} setOpen={setOpen} hideSliderMenu={hideSliderMenu} /> */}
			{/* <NavigationBar open={fullState.open} setOpen={setOpen} hideSliderMenu={hideSliderMenu} menuRef={menuRef} /> */}
			<Header />
			<main className="problem__main">
				<Settings sendData={getSettings} />
				<Problems problems={problemController(fullState.problemSettings)} columns={fullState.colsPerRow} />
				{/* <Problems problems={problemController([{operation: 'addition', unknown: 'result', type: 'up-to-10', numberOfOperands: 2, quantity: 8}])} columns={fullState.colsPerRow} /> */}
				{/* <Problems problems={problemGenerator('up-to-10', 2, 8)} columns={fullState.columns_per_row} /> */}
				{/* <Problems problems={problems} columns={fullState.columns_per_row} problem={problemGenerator('up-to-10', 2, 4, 10)}/> */}
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default AdditionSubtraction;
