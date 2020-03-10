const CryptoJS = require("crypto-js");

class Cipher {
  static encrypt(str, pass) {
    let hasil = console.log(CryptoJS.AES.encrypt(str, pass).toString());
    return hasil;
  }
  static decrypt(str, pass) {
    let chiper = CryptoJS.AES.encrypt(str, pass).toString();
    let bytes = CryptoJS.AES.decrypt(chiper.toString(), pass);
    let hasil2 = console.log(bytes.toString(CryptoJS.enc.Utf8));
    return hasil2;
  }
}

// Cipher.encrypt("ini tulisan rahasia", "p4$$w0rd");
// Cipher.decrypt("ini tulisan rahasia", "p4$$w0rd");

module.exports = Cipher;
