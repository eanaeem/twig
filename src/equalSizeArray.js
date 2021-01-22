/**
 * Divide an array into equally sized arrays
 * @param originalArray - Array to divide
 * @param subArrayNumber - Number of subArrays
 */

function equalSizeArray(originalArray, subArrayNumber) {
  if (
    !originalArray.length ||
    typeof subArrayNumber !== "number" ||
    subArrayNumber < 0
  ) {
    return "Please provide non empty array and positive number";
  }

  const arrLength = originalArray.length;

  if (subArrayNumber === 1 || subArrayNumber > arrLength) {
    return [originalArray];
  }

  let clonedArray = [...originalArray];
  const finalArray = [];
  let subArraySize = Math.floor(arrLength / subArrayNumber);

  if (arrLength % subArrayNumber === 0) {
    while (clonedArray.length) {
      finalArray.push(clonedArray.splice(0, subArraySize));
    }
  } else {
    let index = 0;
    subArrayNumber--;
    subArraySize = Math.floor(arrLength / subArrayNumber);
    if (arrLength % subArraySize === 0) subArraySize--;
    while (index < subArraySize * subArrayNumber) {
      finalArray.push(clonedArray.splice(0, subArraySize));
      index += subArraySize;
    }
    finalArray.push(clonedArray);
  }

  return finalArray;
}

module.exports = {
  equalSizeArray,
};
