import React from 'react';

const Math = (props) => {
	return (
		<div className="description">
			<p className="description__paragraph description__paragraph--level-two">
				Below there are several strategies for performing mental addition and subtraction:<br />
				<br />
				<b>Addition</b>
				<br />
				<br />
				<b>Counting On</b>
				<br />
				Counting On is a beginning mental math strategy. Counting on means that you start with the biggest number in an
				equation, and then count up. For example, in the equation 5 + 3, you start with the "5" in the head, and then
				count up, "6, 7, 8." This is important to start count from "5", but not like, "1, 2, 3, 4, 5…..6, 7, 8." It also
				allowes to understand the commutative property of addition, where if an equation looks like this: "2 + 6," it
				still should start with the bigger number (in this case, 6) and count up: "7, 8."<br />
				<br />
				<b>Make a Ten</b>
				<br />
				Make a Ten is a mental math strategy where you use the number combinations that make ten to form connections and
				relationships to other facts. First, it is necessary to learn the number combinations that make 10. Then, you
				can confidently use those combinations. For example, to solve 8 + 5, you might think, “I can take two from the 5
				and give it to the 8 to make a ten, and then add the leftover 3 to make 13.”<br />
				<br />
				<b>Break Apart/Decomposing</b>
				<br />
				Breaking apart an addend by place value is a powerful mental math strategy for adding numbers with two or more
				digits. The key point is decomposing one of the addends into the tens and the ones and then add them
				sequentially. For example, to solve 43 + 35, we could first decompose the 35 into 30 and 5, then start by adding
				43+30 to make 73, and then the remaining 5 to make 78.<br />
				<br />
				<b>Compensating And Adjusting</b>
				<br />
				Compensation involves adding more than you need and then subtracting the extra off that you have added. This
				strategy is useful for adding numbers that are close to a multiple of 10, such as numbers that end in 1 or 2, or
				8 or 9. The number to be added is rounded to a multiple of 10 plus or minus a small number. For example, adding
				9 is carried out by adding 10, then subtracting 1. A similar strategy works for adding decimals that are close
				to whole numbers.<br />
				<br />
				<b>Subtraction</b>
				<br />
				<br />
				<b>Counting On</b>
				<br />
				Counting On is a beginning mental math strategy. Counting on means that you simple counting down, opposite to
				the counting up in addition. For example, in the equation 5 - 3, you start with the "5" in the head, and then
				count down, "4, 3, 2."<br />
				<br />
				<b>Subtract in two parts</b>
				<br />
				Subtract in two parts is a good strategy, when ones of subtrahend are bigger than ones of minuend. First we
				decompose subtrahend's ones in to two numbers, one of them is equal the minuend's ones. Then subtract first
				minuend's ones, and next subtract the remind of subtrahend from rounded tens of minuend. For example: 64 - 7 =
				64 - 4 - 3 = 60 - 3 = 57.<br />
				<br />
				<b>Subtract in parts: tens and ones</b>
				<br />
				Subtract in tens and ones is a universal strategy, allowes subtract any digit numbers. First we decompose
				subtrahend in to tens and ones. Then subtract from minuend first tens, and then ones. For example: 64 - 27 = 64
				- 20 - 7 = 44 - 7 = 37.<br />
				<br />
				<b>Equal Additions Strategy</b>
				<br />
				The equal additions strategy based on the fact, that increasing both minuend and subtrahend by the same number
				does not change the difference between them. So, we need just add number to round to the nearest tenth one of
				the operand, and add the same number to the other operand. Then it will be far easyer to find the difference
				between them. For example: 44 - 18; add 2 to both numbers: (44 + 2) - (18 + 2) = 46 - 20 = 26.<br />
			</p>
		</div>
	);
};

export default Math;
