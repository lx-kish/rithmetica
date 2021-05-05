import React from 'react';

import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';
import Header from '../../components/headers/addition-subtraction/header.component';
import Settings from '../../components/settings/settings.component';
import Problems from '../../components/addition-subtraction/problems/problems.component';
import Footer from '../../components/footer/footer.component';

import problemController from '../../components/math/problems-controller';

import initialProblemSettings from './initial-problem-settings';

import ISetting from '../../TS/interfaces/ISetting';

interface IProps {};

const AdditionSubtraction: React.FC<IProps> = (props) => {
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
	const getSettings = (settings: ISetting[]) => {

		setFullState({
			...fullState,
			problemSettings: settings
		});
	};

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
