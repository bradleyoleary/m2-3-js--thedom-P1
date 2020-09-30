// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  expect(reverseIt("brad")).toBe("darb");
  expect(reverseIt("whatsup")).toBe("pustahw");
  expect(reverseIt("12345678910")).toBe("01987654321");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
