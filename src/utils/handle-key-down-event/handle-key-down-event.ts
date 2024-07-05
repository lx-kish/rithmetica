/**
 * Handles key-down event, runs key validation,
 * decline input of the key if invalid
 * @param  {event} e a key down event
 *
 * @return {void}
 */
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  /**
   * Validate a key down event for the range of criteria
   * @param  {event} e a key down event
   * @return {boolean} validation state
   */
  const applyKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    /**
     * define key code
     */
    const keyCode = e.keyCode || e.which;

    /**
     * arrows up & down are allways denied
     * to prevent choosing right answer from keyboard
     */
    if (keyCode === 38 || keyCode === 40) {
      return true;
    }

    /** delete, backspace and tab are always allowed
     */
    if (
      keyCode === 8 || //backspace
      keyCode === 46 || //delete
      keyCode === 9 || //tab
      keyCode === 37 || //<- arrow
      keyCode === 39 //-> arrow
    ) {
      return false;
    }

    /** enable . (decimal sign) only in case of decimals and not in case of whole numbers
     */
    if (
      e.currentTarget.getAttribute("pattern")!.indexOf(".") > 0 &&
      (keyCode === 110 || //. on keypad
        keyCode === 190 || //. on keyboard
        e.key === ".") // . on non-English keyboard
    ) {
      return false;
    }

    /** more than 2 digits in a 2-digits fields,
     * more than 3 digits in a 3-digits field
     * instant return to prevent overflowing
     */
    if (e.currentTarget.value.length > e.currentTarget.max.length - 1) {
      return true;
    }

    /** https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad/13196983
     * The problem with keyCode is to avoid the combined keys
     * with the numbers on top of keyboard, we must add a check
     *  on the key "Shift" and "Alt" to avoid special characters
     * such as e @ & " { } ...
     */
    const key = Number(e.key);

    if (isNaN(key) || e.key === null || e.key === " ") {
      return true;
    }

    return false;
  };

  if (applyKeyDown(e)) {
    e.preventDefault();
  }
};

export default handleKeyDown;
