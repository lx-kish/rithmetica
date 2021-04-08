import React from 'react';

const HowMultitabWorks = (props) => {
	return (
		<div className="description">
			<p className="description__paragraph description__paragraph--level-one">
				This part of the application helps kids discover the fact that the term "multiplication" means sequential
				addition of a number to itself several times:<br />
				2 x 4 (two times four) = 2 + 2 + 2 + 2.<br />
				<br />
				The application consists of the table with input fields, which should be filled with the correct values. The
				correct value colors in <b>white</b> and the incorrect value colors in{' '}
				<span className="red">
					<b>red</b>
				</span>.<br />
				<br />
				Table contains 9 rows of fields, each row represents a number. First row represents 2, and then each row is
				increasing by 1 sequentially up to 10. Table contains 9 columns of fields, each column represents a number,
				starting from 2 and up to 10. Depending on the Addition/Subtraction toggle status, numbers of each column are
				sequentially increasing or decreasing by 1.<br />
				<br />
				In case Addition is selected, the row starts with the base number of the row, and the input value is the sum of
				the previous input value and the base number of the current row. For example, in the row of "3" all the field
				values differ from each other by 3: the row starts from the base number of 3, so the next field value is 6 (3 +
				3), followed by 9 (6 + 3), followed by 12 (9 + 3), and so on.<br />
				<br />
				In case Subtraction is selected, the row starts with the base number of the row times 10, and the input value is
				the difference between the previous input value and the base number of the row. For example, in the row of "6"
				the first field value is 60 (6 x 10), the next is 54 (60 - 6), followed by 48 (54 - 6), and so on.<br />
				<br />
				To ease the counting for kids there are colored dots under each field, the number of the dots corresponds to the
				base number of the row. It alowes to count the number in the next field using Count On method, and counting
				dots, for example 6 + 3 like "7, 8, 9", instead of performing mental addition.
			</p>
		</div>
	);
};

export default HowMultitabWorks;
