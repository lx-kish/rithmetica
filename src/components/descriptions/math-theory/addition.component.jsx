import React from 'react';

import Collapsible from '../../collapsible/collapsible.component';

import CountingOn from './addition-strategies/counting-on.component';
import MakeATen from './addition-strategies/make-a-ten.component';
import Decomposing from './addition-strategies/decomposing.component';
import Compensation from './addition-strategies/compensation.component';

const AdditionStrategies = (props) => {
	return (
		<React.Fragment>
			<Collapsible
				title={`Counting On`}
				id={`addition-counting-on`}
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
				id={`addition-make-a-ten`}
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
				id={`addition-decomposing`}
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
				title={`Compensation`}
				id={`addition-compensation`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-two`}
				iconBoxClassName={`collapsible__icon-box`}
				iconClassName={`collapsible__icon`}
				content={
					<Compensation
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
