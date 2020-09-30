// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  expect(longestWord("hi how are ya mister")).toBe("mister");
  expect(longestWord("f qqqqq www ii cccc pppppp")).toBe("pppppp");
  expect(longestWord("it is a nice day to be outside")).toBe("outside");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
