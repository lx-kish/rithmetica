import React from 'react';

const TwoDigitAndTens = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Compensation involves adding more than you need and then subtracting the extra off that you have added. This
				strategy is useful for adding numbers that are close to a multiple of 10, such as numbers that end in 1 or 2, or
				8 or 9. The number to be added is rounded to a multiple of 10 plus or minus a small number. For example, adding
				9 is carried out by adding 10, then subtracting 1. A similar strategy works for adding decimals that are close
				to whole numbers.<br />
				4 + 3<br />
				start with the "4" in the head, and then count up, "5, 6, 7." This is important to start count from "4", but not
				like, "1, 2, 3, 4...5, 6, 7." It also introduces the commutative property of addition, which says that changing
				the order of addends does not change the sum. So if an equation looks like this<br />
				2 + 6<br />
				it still should start with the bigger number (in this case, 6) and count up: "7, 8."<br />
			</p>
		</div>
	);
};

export default TwoDigitAndTens;
