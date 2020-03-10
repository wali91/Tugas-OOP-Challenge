const Hash = require("../src/01");

test("Convert Hash", () => {
  expect(Hash.md5("secret")).toMatch("5ebe2294ecd0e0f08eab7690d2a6ee69");
});

test("Convert Hash", () => {
  expect(Hash.sha1("secret")).toMatch(
    "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4"
  );
});

test("Convert Hash", () => {
  expect(Hash.sha256("secret")).toMatch(
    "2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b"
  );
});

test("Convert Hash", () => {
  expect(Hash.sha512("secret")).toMatch(
    "bd2b1aaf7ef4f09be9f52ce2d8d599674d81aa9d6a4421696dc4d93dd0619d682ce56b4d64a9ef097761ced99e0f67265b5f76085e5b0ee7ca4696b2ad6fe2b2"
  );
});
