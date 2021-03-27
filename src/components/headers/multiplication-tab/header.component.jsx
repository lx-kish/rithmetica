import React from 'react';

import Collapsible from '../../collapsible/collapsible.component';

import Toggler from '../../toggler/toggler.component';

const content = {
	togglerAddSubtract: {
		toggleBox: {
			className: 'add-subtract-toggle__box'
		},
		label: {
			htmlFor: 'addition-subtraction',
			span: {
				left: {
					className: 'header__description',
					text: 'addition'
				},
				right: {
					className: 'header__description',
					text: 'subtraction'
				}
			}
		},
		input: {
			type: 'checkbox',
			className: 'add-subtract-toggle__input',
			id: 'addition-subtraction'
		}
	}
};

const Header = (props) => {

	const collapsibleContent = () => {
		return (
			<div className="collapsible__part">
				<p className="header__description">
					{props.subtract ? (
						`- Subtract the amount of dots under the field from the number from the left.`
					) : (
						`- Add the amount of dots under the field to the number from the left.`
					)}
					<br />
					- Write an answer at the field above.<br />
					- Right answer colors <b>white</b>.<br />
					- Wrong answer colors{' '}
					<span className="three">
						<b>red</b>
					</span>.<br />
					- Move to the next field and repeate.
				</p>
			</div>
		);
	};

	return (
		<header className="header">
			<h1 className="header__title">Multiplication table</h1>
			<h3 className="header__title--small">learn multiplication using addition and subtraction</h3>
            <hr className="header__hr" />
			<Collapsible
				title={`How to use`}
				id={`multitable-usage`}
				content={collapsibleContent()}
				// collapsibleClassName={`collapsible--settings`}
			/>
			{/* <hr className="header__hr" /> */}
			<Toggler
				{...content.togglerAddSubtract}
				checked={props.subtract}
				// onChange={props.setSubtract}
				onChange={() => props.setSubtract()}
			/>
			<hr className="header__hr" />
		</header>
	);
};

export default Header;
