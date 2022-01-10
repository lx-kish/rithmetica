import React from 'react';

import IconChevronDown from '../icons-svg/icon-chevron-down.component';

interface IProps {
	id: string;
	content?: JSX.Element | string;
	borderBottom?: boolean;
	collapsibleClassName: string;
	titleClassName?: string;
	title?: string;
	iconBoxClassName?: string;
	iconClassName: string;
	getDisplay?: (display: boolean) => boolean;
};

const Collapsible: React.FC<IProps> = (props) => {

	const { getDisplay } = props;

	const [display, setDisplay] = React.useState(false);

	/**
	 * React hook useEffect for sending up the state in case it is needed
	 */
	React.useEffect(() => {

		if (getDisplay) getDisplay(display);

	}, [getDisplay, display]);
	// }, [display]);

	const handleChange = () => {
		setDisplay(!display);
	}

	return (
		<div className={props?.collapsibleClassName} key={props.id}>
			<div className={`collapsible__line${props.borderBottom ? " collapsible__border-bottom" : ""}`}>
				<h3 className={props?.titleClassName}>{props.title}</h3>
				<input
					type="checkbox"
					className="collapsible__btn"
					id={props.id}
					checked={display}
					onChange={handleChange}
					autoComplete="off" //for dropping the value when cached by browser
				/>
				<label htmlFor={props.id} className={props?.iconBoxClassName}>
					<IconChevronDown className={props.iconClassName} />
				</label>
			</div>
			<div className={`description ${display ? "collapsible--expanded" : "collapsible--collapsed"}`}>
				{props.content}
			</div>
		</div>
	);
};

export default Collapsible;
