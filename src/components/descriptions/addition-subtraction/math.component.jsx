import React from 'react';

import Collapsible from '../../collapsible/collapsible.component';

import CountingOn from '../math-theory/strategies/counting-on.component';
import MakeATen from '../math-theory/strategies/make-a-ten.component';
import Decomposing from '../math-theory/strategies/decomposing.component';
import EqualAddition from '../math-theory/strategies/equal-addition.component';
import Compensation from '../math-theory/strategies/compensation.component';

const Math = (props) => {
	return (
		<React.Fragment>
			<div className={props.className}>
				<p className={props.paragraphClassName}>
					There are several strategies for performing mental addition and subtraction:<br />
				</p>
			</div>
			<hr className="header__hr" />
			<Collapsible
				title={`Counting On`}
				id={`counting-on`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-four`}
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
				id={`make-a-ten`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-four`}
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
				id={`decomposing`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-four`}
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
				id={`equal-addition`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-four`}
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
			<Collapsible
				title={`Compensation`}
				id={`compensation`}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-four`}
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

export default Math;
