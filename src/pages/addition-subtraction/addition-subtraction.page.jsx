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

import IconChevronDown from '../../components/icons-svg/icon-chevron-down.component';

const AdditionSubtraction = (props) => {
	/**
     * Single state hook useState for all the state properties
     */
	const [ fullState, setFullState ] = React.useState({
		problemsSettings: [
			{
				operation: 'addition',
				format: 'result',
				type: 'up-to-10',
				numberOfAddends: 2,
				numberOfProblems: 8
			}
		],
		colsPerRow: 2,
		// open: false
	});

	// const menuRef = React.useRef();

	// const setOpen = () => {
	// 	setFullState({
	// 		...fullState,
	// 		open: !fullState.open
	// 	});
	// };

	// const hideSliderMenu = () => {
	// 	setFullState({
	// 		...fullState,
	// 		open: false
	// 	});
	// };

	// useClickOutside(menuRef, hideSliderMenu);

	// /**
	//  * Returns mathematical sign for addition or subtraction
	//  * @return {html entity} sign code
	//  */
	// const getSign = () => {
	//     return fullState.subtract ? <>&#x2212;</> : <>&#x2b;</>
	// }

	// /**
	//  * Gets and returns offsetTop of the 'header-stick' section
	//  * @return {Number} offsetTop
	//  */
	// const getHeaderOffsetTop = () => {
	//     const header = document.getElementById('header-stick');
	//     return header.offsetTop;
	// };

	// /**
	// * Empty all the table inputs
	// * @return {void}
	// */
	// const emptyInputs = () => {
	//     let inputs = document.getElementsByClassName('component__input');
	//     // console.log(typeof(inputs))
	//     inputs = Array.from(inputs);
	//     inputs.map(input => {
	//         input.value = '';
	//     })
	// };

	/**
	 * problem parametres: 
	 * operation: <addition>, <subtraction>
	 * format: <result>, <missingFirst>, <missingLast>
	 * type: <up-to-10>, ...
	 * numberOfAddends: <Number>
	 * numberOfProblems: <Number>
	 */

	// console.log('random numbers from addition-subtraction page ===> ', random(0, 99));

	return (
		<React.Fragment>
			<NavigationBar />
			{/* <NavigationBar open={fullState.open} setOpen={setOpen} hideSliderMenu={hideSliderMenu} /> */}
			{/* <NavigationBar open={fullState.open} setOpen={setOpen} hideSliderMenu={hideSliderMenu} menuRef={menuRef} /> */}
			<Header
				// display={fullState.display}
				// subtract={fullState.subtract}
				// setChecked={() =>
				// 	setFullState({
				// 		...fullState,
				// 		display: !fullState.display
				// 	})}
				// // setSubtract={() =>
				// // 	setFullState({
				// // 		...fullState,
				// // 		subtract: !fullState.subtract
				// // 	})}
			/>
			<main className="problem__main">
				<Settings
					// display={display}
					// setChecked={() =>
					// 	setDisplay(!display)
					// }
				/>
				{/* <div className="collapsible">
					<h3 className="collapsible__title header__title--small">Settings</h3>
					<input
						type="checkbox"
						className="collapsible__btn"
						id="collapsible-toggle"
						checked={props.display}
						onChange={() =>
							setFullState({
								...fullState,
								display: !fullState.display
							})}
					/>
					<label htmlFor="collapsible-toggle" className="collapsible__icon-box">
						<IconChevronDown className="collapsible__icon" />
					</label>
					{showCollapsible()}
					<hr className="header__hr" />
				</div> */}
				<Problems problems={problemController(fullState.problemsSettings)} columns={fullState.colsPerRow} />
				{/* <Problems problems={problemController([{operation: 'addition', format: 'result', type: 'up-to-10', numberOfAddends: 2, numberOfProblems: 8}])} columns={fullState.colsPerRow} /> */}
				{/* <Problems problems={problemGenerator('up-to-10', 2, 8)} columns={fullState.columns_per_row} /> */}
				{/* <Problems problems={problems} columns={fullState.columns_per_row} problem={problemGenerator('up-to-10', 2, 4, 10)}/> */}
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default AdditionSubtraction;
