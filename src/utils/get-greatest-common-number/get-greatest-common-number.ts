/**
 * Finds the biggest number
 * @param  {Array} set1 set of numbers to compare
 * 
 * @param  {Array} set2 set of numbers to compare
 * 
 * @return {number} greatest common number persents in both sets; returns -1 if no one found 
 */
const getGreatestCommonNumber = (set1: number[], set2: number[]): number => {

  let greatestCommonFactor = 0;

  const longSet = set1.length > set2.length ? set1 : set2;
  const shortSet = set1.length > set2.length ? set2 : set1;
  
  try {
    for (let i = 0; i < longSet.length; i++) {
      if (shortSet.includes(longSet[i])) {
        greatestCommonFactor = longSet[i];
      }
    }
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return greatestCommonFactor;
};

export default getGreatestCommonNumber;