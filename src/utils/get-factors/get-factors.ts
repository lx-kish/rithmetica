
/**
 * Handles key-down event, runs key validation, 
 * decline input of the key if invalid
 * @param  {num} number value, which factors are getting
 * 
 * @return {Array} array of numbers - factors of a num
 */
const getFactors = (num: number): number[] => {

  let result: number[] = [];

  try {

    const minFactors: number[] = [];
    const maxFactors: number[] = [];
    
    for (let i = 1; i <= Math.trunc(num / 2); i++) {
      
      if (maxFactors.length && i >= maxFactors[0]) break;
      
      if (!(num % i)) { // if reminder is 0
        
        const factor = num / i;
        maxFactors.unshift(factor);

        if (factor !== i) {
          minFactors.push(i);
        }
      };
    }
    
    result = [...minFactors, ...maxFactors]
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
  
  return result;
};

export default getFactors;