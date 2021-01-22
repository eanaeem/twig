const { equalSizeArray } = require("../src");

describe("equalSizeArray ", () => {
  test(" should return equal size arrays if divided equally ", () => {
    const expectedResult = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(equalSizeArray([1, 2, 3, 4, 5, 6], 3)).toEqual(expectedResult);
  });

  test("should return equal size arrays expect last array if not divided equally ", () => {
    const expectedResult = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
      [13],
    ];
    expect(
      equalSizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
    ).toEqual(expectedResult);
  });
  test(" should return message if array size is not greater than 0 ", () => {
    expect(equalSizeArray([], 2)).toEqual(
      "Please provide non empty array and positive number"
    );
  });
  test(" should return message if size is not a number ", () => {
    expect(equalSizeArray([1, 2, 3, 4, 5], "2")).toEqual(
      "Please provide non empty array and positive number"
    );
  });
  test(" should return message if size is not positive number ", () => {
    expect(equalSizeArray([1, 2, 3, 4, 5], -2)).toEqual(
      "Please provide non empty array and positive number"
    );
  });
  test(" should return empty array if empty array is provided ", () => {
    expect(equalSizeArray([], 2)).toEqual(
      "Please provide non empty array and positive number"
    );
  });
});
