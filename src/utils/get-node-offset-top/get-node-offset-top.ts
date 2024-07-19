/**
 * Gets and returns offsetTop of the element
 * @node {Object} element who's offsetTop should be returned
 * @return {Number} offsetTop
 *
 * For detailed explanations of checking the existance of node see:
 * https://stackoverflow.com/questions/5629684/how-can-i-check-if-an-element-exists-in-the-visible-dom/
 */
function getNodeOffsetTop(node: HTMLElement | null): number {
  if (!document.body.contains(node)) {
    return -1;
  }
  return node?.offsetTop || -1;
}

export default getNodeOffsetTop;
