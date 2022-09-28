
/**
 * Handles key-down event, runs key validation, 
 * decline input of the key if invalid
 * @param  {Object} inputs values entered in inputs be set
 * 
 * @param  {Object} values the values should be entered
 * 
 * @return {boolean}
 */
const checkInputsFilled = (inputs: Record<string, any>, values: Record<string, any>): boolean => {

  for (const [key, value] of Object.entries(inputs)) {
    if (values[key] !== value) return false;
  }
  return true;

};

export default checkInputsFilled;