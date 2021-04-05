import React from 'react';

import Collapsible from '../../collapsible/collapsible.component';

import CountingOn from './subtraction-strategies/counting-on.component';
import MakeATen from './subtraction-strategies/make-a-ten.component';
import Decomposing from './subtraction-strategies/decomposing.component';
import EqualAddition from './subtraction-strategies/equal-addition.component';

const AdditionStrategies = (props) => {
	return (
		<React.Fragment>
			<Collapsible
				title={`Counting On`}
				id={`subtraction-counting-on`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-two`}
				iconBoxClassName={`collapsible__icon-box`}
				iconClassName={`collapsible__icon`}
				content={
					<CountingOn
						className="description"
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={true}
			/>
			<Collapsible
				title={`Make A Ten`}
				id={`subtraction-make-a-ten`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-two`}
				iconBoxClassName={`collapsible__icon-box`}
				iconClassName={`collapsible__icon`}
				content={
					<MakeATen
						className="description"
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={true}
			/>
			<Collapsible
				title={`Decomposing`}
				id={`subtraction-decomposing`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-two`}
				iconBoxClassName={`collapsible__icon-box`}
				iconClassName={`collapsible__icon`}
				content={
					<Decomposing
						className="description"
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={true}
			/>
			<Collapsible
				title={`Equal Addition`}
				id={`subtraction-equal-addition`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-two`}
				iconBoxClassName={`collapsible__icon-box`}
				iconClassName={`collapsible__icon`}
				content={
					<EqualAddition
						className="description"
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={true}
			/>
		</React.Fragment>
	);
};

export default AdditionStrategies;
