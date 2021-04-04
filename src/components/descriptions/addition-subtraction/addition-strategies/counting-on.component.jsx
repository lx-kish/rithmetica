import React from 'react';

const CountingOn = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Counting On is a beginning mental math strategy. First, find the biggest number in an equation. Then count up
				until adding the lowest number. For example, in the equation<br />
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

export default CountingOn;
