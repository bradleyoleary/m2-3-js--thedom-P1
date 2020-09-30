// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  expect(sum([10, 20, 30])).toBe(60);
  expect(sum([100, 5, 66])).toBe(171);
  expect(sum([70, 43, 51])).toBe(164);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
