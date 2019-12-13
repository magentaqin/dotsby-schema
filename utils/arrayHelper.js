const omitArrElements= (arr, elementsToOmit) => {
  return arr.filter(item => !elementsToOmit.includes(item));
}

module.exports = {
  omitArrElements,
}