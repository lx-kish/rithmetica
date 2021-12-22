import React from 'react';

import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';
import Header from '../../components/headers/addition-subtraction/header.component';
import Settings from '../../components/settings/settings.component';
import Problems from '../../components/addition-subtraction/problems/problems.component';
import Footer from '../../components/footer/footer.component';

interface IProps { };

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

	return (
		<React.Fragment>
			<NavigationBar />
			<main className="problem__main main">
				<Header />
				<Problems />
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default AdditionSubtraction;
