import React from 'react';

interface IProps {
	className: string;
	paragraphClassName: string;
};

const EqualAddition: React.FC<IProps> = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Equal Additions Strategy based on the fact, that increasing both minuend and subtrahend by the same number
				results in the same difference between them. Just add the appropriate number to both operands to round to the
				nearest tenth one of them<br />
				<span className="description__paragraph--level-one">44 - 18</span><br />
				add <span className="red">2</span> to both operands<br />
				<span className="description__paragraph--level-one">(44 + <span className="red">2</span>) - (18 + <span className="red">2</span>) =</span><br />
				<span className="description__paragraph--level-one">46 - 20 = 26</span><br />
				Another example<br />
				<span className="description__paragraph--level-one">29 - 17</span><br />
				add <span className="red">1</span> to both operands<br />
				<span className="description__paragraph--level-one">(29 + <span className="red">1</span>) - (17 + <span className="red">1</span>) =</span><br />
				<span className="description__paragraph--level-one">30 - 18 = 12</span><br />
			</p>
		</div>
	);
};

export default EqualAddition;
