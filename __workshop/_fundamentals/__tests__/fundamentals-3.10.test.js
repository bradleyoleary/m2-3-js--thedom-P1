// We import (require) the function that we want to test.
const makeIntoTitle = require("../fundamentals-3.10");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 10", () => {
  expect(makeIntoTitle("a bb ccc dddd e ff ggg")).toBe(
    "A Bb Ccc Dddd E Ff Ggg"
  );
  expect(makeIntoTitle("how to code, part one")).toBe(
    "How To Code, Part One"
  );
  expect(makeIntoTitle("whats up old friend")).toBe(
    "Whats Up Old Friend"
  );
  expect(makeIntoTitle("it is a rainy day")).toBe(
    "It Is A Rainy Day"
  );
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
