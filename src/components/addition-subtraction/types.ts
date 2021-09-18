type TTypes = string[];

const TaskTypes: TTypes = [
  'up to ten', // 2 + 3 = 5; 6 - 4 = 2
  'single digit operands', // 8 + 7 = 15; 9 - 3 = 6 
  'two- and single- digit', // 23 + 9 = 32; 17 - 8 = 9
  'two-digit and tens', // 23 + 10 = 33; 56 - 20 = 36
  'two-digit operands', // 75 + 46 = 121; 85 - 37 = 48
  'two-digit tidying up', // 89 + 93 = 182; 79 - 32 = 47
  'tens within thousand', // 374 + 60 = 434; 347 - 60 = 287
  'hundreds within thousand', // 374 + 200 = 574; 574 - 200 = 374
  // 'three-digit operands', // 374 + 782 = 1156; 774 - 382 = 392
  // 'three-digit tiding up', // 498 + 703 = 1201; 703 - 498 = 205
  // 'tens within thousand',
];

export default TaskTypes;