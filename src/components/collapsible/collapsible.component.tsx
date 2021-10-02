import React from 'react';

import IconChevronDown from '../icons-svg/icon-chevron-down.component';

interface IProps {
	id: string;
	content?: JSX.Element | string;
	borderBottom?: boolean;
	collapsibleClassName?: string;
	titleClassName?: string;
	title?: string;
	iconBoxClassName?: string;
	iconClassName: string;
	getDisplay?: (display: boolean) => boolean;
};

const Collapsible: React.FC<IProps> = (props) => {

	const [display, setDisplay] = React.useState(false);

	/**
	 * React hook useEffect for sending up the state in case it is needed
	 */
	React.useEffect(() => {

		if (props?.getDisplay) props.getDisplay(display);

	}, [display]);

	const showCollapsible = () => {
		return display ? (
			<React.Fragment>
				{props.content}
				{props.borderBottom ? <hr className="header__hr" /> : null}
			</React.Fragment>
		) : null;
	};

	return (
		<div className={props?.collapsibleClassName} key={props.id}>
			<h3 className={props?.titleClassName}>{props.title}</h3>
			<input
				type="checkbox"
				className="collapsible__btn"
				id={props.id}
				checked={display}
				onChange={() => setDisplay(!display)}
				autoComplete="off" //for dropping the value when cached by browser
			/>
			<label htmlFor={props.id} className={props?.iconBoxClassName}>
				<IconChevronDown className={props.iconClassName} />
			</label>
			<hr className="header__hr" />
			{showCollapsible()}
		</div>
	);
};

export default Collapsible;
