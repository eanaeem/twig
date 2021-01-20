function equalSizeArray(originalArray, size) {
  if (typeof size !== "number" || size < 0) {
    return "Please provide positive number";
  }

  let clonedArray = [...originalArray];
  let finalArray = [];
  while (clonedArray.length) {
    finalArray = [...finalArray, clonedArray.splice(0, size)];
  }

  return finalArray;
}

module.exports = {
  equalSizeArray,
};
