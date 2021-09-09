# Rithmetica

## develop your mental math skills

### learning application for kids and adults

React JS Single Page Application, dedicated to boost mental math skills and develop math insights.

Visit https://lx-kish.github.io/rithmetica/ to see the app in operation.

#### ! ! ! I M P O R T A N T ! ! ! 

#### Because of the nature of github pages hosting and it's sub-links routing, it is impossible to load the direct link to a sub-page. In case of update of a sub-page you will get a 404 (File not found) error in return. To avoid it, first load the start page (https://lx-kish.github.io/rithmetica/), then after it's successful loading, move to the needed page using the menu navigation items.


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

## About the project

The application is a React JS Single Page Application, based on create-react-app.

## Releas notes 
##### Releas notes starts from v2.3.3

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