const Cipher = require("../src/02");

test("Cipher encrypt decrypt", () => {
  expect(Cipher.encrypt("ini tulisan rahasia", "p4$$w0rd")).toMatch(
    "U2FsdGVkX19gKOq7KZLeyuIYAxEJ4TyEIeh+tpb0JfdLVFewjlrQi+Ai8g3BtvdK"
  );
});

test("Cipher encrypt decrypt", () => {
  expect(Cipher.decrypt("ini tulisan rahasia", "p4$$w0rd")).toMatch(
    "ini tulisan rahasia"
  );
});
