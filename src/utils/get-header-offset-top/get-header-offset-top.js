/**
 * Gets and returns offsetTop of the 'header-stick' section
 * @return {Number} offsetTop
 */
const getHeaderOffsetTop = () => {
  const header = document.getElementById('header-stick');

  console.log(
  	'%c header and header.offsetTop from getHeaderOffsetTop ===> ',
  	'color: orangered; font-weight: bold;',
  	header,
    header.offsetTop
  );

  if (header) {
    return header.offsetTop;
  } else {
    return null;
  }
};

export default getHeaderOffsetTop;