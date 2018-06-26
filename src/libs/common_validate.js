const commonValidate = {};

commonValidate.isEmpty = str => {
  return str.length >= 1 ? false : true;
};



export default commonValidate;