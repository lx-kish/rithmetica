# Rithmetica

## develop your mental math skills

### learning application for kids and adults

React JS Single Page Application, dedicated to boost mental math skills and develop math insights.

Visit https://lx-kish.github.io/rithmetica/ to see the app in operation.

#### ! ! ! I M P O R T A N T ! ! !

#### Because of the nature of github pages hosting and it's sub-links routing, it is impossible to load the sub-page directly by its URL. In case you refresh a sub-page you will get a 404 (File not found) error in return. To avoid it, please load the landing page first (https://lx-kish.github.io/rithmetica/), then use site navigation menu to go to the needed sub-page.

## How to use

Application contains several parts:

### Multiplication table

#### Learn multiplication using addition and subtraction

This part of the application helps kids discover the fact that the term "multiplication" means sequential addition of a number to itself several times: 2 x 4 (two times four) = 2 + 2 + 2 + 2.

The application consists of the table with input fields, which should be filled with the correct values. The correct value colors in white and the incorrect value colors in red.

Table contains 9 rows of fields, each row represents a number. First row represents 2, and then each row is increasing by 1 sequentially up to 10. Table contains 9 columns of fields, each column represents a number, starting from 2 and up to 10. Depending on the Addition/Subtraction toggle status, numbers of each column are sequentially increasing or decreasing by 1.

In case Addition is selected, the row starts with the base number of the row, and the input value is the sum of the previous input value and the base number of the current row. For example, in the row of "3" all the field values differ from each other by 3: the row starts from the base number of 3, so the next field value is 6 (3 + 3), followed by 9 (6 + 3), followed by 12 (9 + 3), and so on.

In case Subtraction is selected, the row starts with the base number of the row times 10, and the input value is the difference between the previous input value and the base number of the row. For example, in the row of "6" the first field value is 60 (6 x 10), the next is 54 (60 - 6), followed by 48 (54 - 6), and so on.

To ease the counting for kids there are colored dots under each field, the number of the dots corresponds to the base number of the row. It alowes to count the number in the next field using Count On method, and counting dots, for example 6 + 3 like "7, 8, 9", instead of performing mental addition.

## Addition and Subtraction

#### boost your skills of addition and subtraction

This part of the application is dedicated to developing mental addition and subtraction skills, which achieves via solving problems with different levels of complexity.

The application consists of the Settings part and the Problems part.

The Problems part contains randomly generated problems, having specific problems characteristics, which can be preassigned in settings part before generating. Each problem contains two numeric operands, addition or subtraction sign, equality sign and a numeric result. Depends on the specific setting, one of the numeric operands or the result is a missing number, means its an empty input field where the right answer should be input. If the answer is right it colors <b>white</b>, if it is wrong it colors <b>red</b>.

The Settings part contains one or multiple settings selections, which assign the specific details for the problems generating. Each setting selection provides option to set operation (addition or subtraction), missing operand (first operand, second one, result or random - alltogether in arbitrary sequence), possible problem type (described further), and quantity of problems needed to be generated. If one of the selections is not selected, or the quantity field remains empty or equal 0, the line of settings just skipping during problems generating.

There are several problem types for addition or subtraction in the application:

- Up to Ten - is a most primitive type of problems, where all the count is happening within ten, and both operands are single digit numbers. This type of problems can be solved with own fingers using Counting On strategy.

- Single Digit Operands - is a type of problems, where both operands are single digit numbers. This type of problems is better suit for training basic arithmetic skills and developing elementary math insights. Couunting on, Make a Ten, and Decomposing are possible solution strategies for this type of problems.

- A Two-Digit and a Single Digit - is a type of problems, where single digit number is added to or subtracted from a two-digit number. Besides the addition numbers, this type of problems developes the skill of keeping in mind resulted tens and includ them into calculations. Possible solution strategies are Counting on, Make a ten, or Decomposing.

- A Two-Digit and a Tens - is a type of problems, where tens number is added to or subtracted from a two-digit number. This type of problems is designed to develop the skill of increasing any number buy any tens, which is leading-up to the base mental strategies, like Decomposing.

- A Two-digits Operands - is the most common type of problems where any two-digits number combined with another two-digit number without any limits. Because of it's universality, all mental strategies can be used to solve problems of this type.

- A Two-Digits Tidying Up - is the variation of A Two-digits Operands type of problems, where the ones of the one or both operands are close to ten and can be rounded up. Despite it can be solved using any mental strategies, this type of problems dedicated to train rounding up strategies, such as Make a Ten, Equal addition, or Compensation.

- A Tens Within Thousand - is a type of problems, where tens number is added to or subtracted from a three-digit number. This type of problems is designed to develop the skill of increasing or decreasing any three-digit number by any tens, sometimes resulting in increasing or decreasing hundreds of the number. It helps to realise the relationship between tens and hundreds, and is leading-up to the base mental strategies, like Decomposing.

- A Hundreds Within Thousand - is a type of problems, where hundreds number is added to or subtracted from a three-digit number. This type of problems is designed to develop basic skill of increasing or decreasing any three-digit number by any hundreds.

## About the project

The application is a React JS Single Page Application, based on create-react-app.

## Releas notes <sup>\*</sup>

##### <sup>\*</sup> - starts from v2.3.3

#### v8.3.0 release notes

- Add single-digit fractions multiplication and division tasks;

- Fix minor bugs.

#### v8.2.0 release notes

- Redesign interim fraction view component and all the related components internal logic;

- Fix minor bugs.

#### v8.1.0 release notes

- Prevent receiving a nullish result when setting up operands for the subtraction of fractions with different denominators;

- Fix minor errors.

#### v8.0.4 release notes

- Extract mouse scroll event handler into a reusable custom hook;

- Fix minor errors.

#### v8.0.3 release notes

- Fix error with autofill input fields on mouse scroll;

- Fix minor errors.

#### v8.0.2 release notes

- Fix React render method after migration to the React version 18.x;

- Fix Fix fraction problem name error at initial settings;

- Fix blank page error occured after deployment to the github pages;

- Fix minor errors.

#### v8.0.1 release notes

- Fix eslint errors;

- Fix building errors.

#### v8.0.0 release notes

- Upgrade React.js to the 18 version;

- Upgrade other component to be compatible with the latest React.js version;

- Refactor routing component;

- Fix errors and bugs.

#### v7.3.0 release notes

- Add different denominator fractions problems;

- Add get greatest common divisor function (refactor);

- Add get least common multiple function (refactor);

- Remove get greatest common number function (outdated);

- Refactor toggler component;

- Fix minor errors and bugs.

#### v7.2.0 release notes

- Remove Same Denominator Fractions problem type;

- Add One-Digit Same Denominator Simple Fractions problem type;

- Add One-Digit Same Denominator Mixed Fractions problem type;

- Add One-Digit Same Denominator Mixed Simplified Fractions problem type;

- Extract fractions problem operands processing into the separate component;

- Fix minor bugs.

#### v7.1.1 release notes

- Fix creation of Fractions problems with initial settings by loading page;

- Fix minor bugs.

#### v7.1.0 release notes

- Add "To The Top" button to the Arithmetica and Fractions applications;

- Add chevron up, left, right svg icons;

- Add icon-chevron-up component;

- Fix minor bugs.

#### v7.0.0 release notes

- Add Fractions application;

- Add Fractions menu item;

- Add Fractions redux storage and redux slice;

- Add Fractions and procentages settings component;

- Add Fractions problems controller;

- Add Fractions view component for add and subtract problem types;

- Add Fractions type of tasks "Fractions Addition and Subtraction";

- Add Fractions task "Same denominator fractions" into the "Fractions Addition and Subtraction" type of tasks;

- Add constants file;

- Add number of columns constants for the correspondent applications;

#### v6.0.4 release notes

- Fix of catch variables' default types;

- Refactor catch variables processing in:

  - problems-controller.ts;
  - problems-factory.ts;
  - get-input-position.ts;
  - operands-factory.ts;
  - hundreds-within-thousand.ts;
  - single-digit-operands.ts;
  - tens-within-thousand.ts;
  - two-and-single-digits.ts;
  - two-digit-and-tens.ts;
  - two-digit-operands.ts;
  - two-digit-tidying-up.ts;
  - up-to-ten.ts;
  - array.ts;
  - equal-groups.ts;
  - single-digit-and-up-to-twenty.ts;
  - single-digit-operands.ts;
  - strip-diagram.ts;

- Refactor redux arithmetic slice;

#### v6.0.3 release notes

- Fix bug with deleting "0" from input in the Multiplication table application;

#### v6.0.2 release notes

- Deactivate operations those not in use;

- Minor bugs fixes;

#### v6.0.1 release notes

- Minor bugs fixes;

#### v6.0.0 release notes

- Redesign application to reproduce different types of problems;

- Redesign problems-factory and problem components to fit different types of problems;

- Separate the equation problem component from the existing structure;

- Add the strip diagram problem component to reproduce strip diagram types of problems;

- Minor bugs fixes;

#### v5.1.0 release notes

- Add single-digit and up-to-twenty multiplication and division problem;

- Reorganize operations processing inside settings component;

- Minor bugs fixes;

#### v5.0.0 release notes

- Redesign application for all basic arithmetical operations;

- Add multiplication, division, fraction and percentage operations;

- Redesign settings component;

- Redesign problem generation to support different types of problems;

- Add single digit multiplication and division problems type;

- Minor bugs fixes;

#### v4.0.1 release notes

- Split settings component into smaller components

- Minor bugs fixes;

#### v4.0.0 release notes

- Redesign solution to store intermediate results between sessions;

- Store settings, problems, and intermediate results of Addition and Subtraction page after each problems generation or answer input;

- Store addition-subtraction switch state and answers of Multiplication Tab page after each addition-subtraction switch or answer input;

- Add Redux storage for Multiplication Tab application;

- Add Redux storage for Addition Subtraction problems and answers;

- Add local storage processing;

- Minor bugs fixes;

#### v3.0.2 release notes

- Problem font size corrections;

- Minor bugs fixes;

#### v3.0.1 release notes

- Layout maximal width fixes;

- Problem font size corrections;

- Minor bugs fixes;

#### v3.0.0 release notes

- The layout is redesigned to adapt for the wide screens;

- The collapsible component is redesigned to be the same width;

- Minor bugs fixes;

#### v2.4.7 release notes

- Fixed bug when it was impossible to use left and right arrow buttons in input fields;

#### v2.4.6 release notes

- Bug fixes;

#### v2.4.5 release notes

- Bug fixes;

#### v2.4.4 release notes

- Bug fixes;

#### v2.4.3 release notes

- Bug fixes;

- Add problem generator for Hundreds Within Thousand problem type;

- Add description for the Hundreds Within Thousand problem type;

#### v2.4.2 release notes

- Bug fixes;

- Refactor problem generator for type Tens Within Thousand;

- Add description for the Tens Within Thousand problem type;

#### v2.4.1 release notes

- Bug fixes;

- Refactor problem generator for type Tens Within Thousand;

#### v2.4.0 release notes

- Bug fixes;

- Add new problem type Tens Within Thousand of Addition and Subtraction section;

#### v2.3.6 release notes

- Bug fixes;

- Change gradations of colors for number 3;

#### v2.3.5 release notes

- Bug fixes;

- Add initial task generation using initial settings in Addition and Subtraction application;

#### v2.3.4 release notes

- Bug fixes;

- Correct selectors for additionSubtractionSlice of Redux storage to prevent full application rerendering on partly changing of state of the slice and instead rerender only those parts of application, which state has been changed;

- Add release notes section in README.md;

#### v2.3.3 release notes

- Bug fixes;

- Addition and Subtraction application switches from local component states via useState() React Hooks to Redux store via @reduxjs/toolkit library to organize the state management and to improve codebase;

- Addition and Subtraction page and related components refactores;

- Version of the application addes in the footer;

- Description for the Multiplication tab module improves;
