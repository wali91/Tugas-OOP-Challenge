//import module crypto
const Crypto = require("crypto-js");

class Hash {
  static md5(str) {
    this.str = str;
    return Crypto.MD5(`${this.str}`).toString();
  }
  static sha1(str) {
    this.str = str;
    return Crypto.SHA1(`${this.str}`).toString();
  }
  static sha256(str) {
    this.str = str;
    return Crypto.SHA256(`${this.str}`).toString();
  }
  static sha512(str) {
    this.str = str;
    return Crypto.SHA512(`${this.str}`).toString();
  }
}

Hash.md5("secret");
Hash.sha1("secret");
Hash.sha256("secret");
Hash.sha512("secret");

module.exports = Hash;
