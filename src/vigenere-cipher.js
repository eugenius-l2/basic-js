const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(state = true) {
    this.directState = state;
  }

  static isLetter(letter) {
    let numLetter = letter.charCodeAt();
    if (numLetter >= 65 && numLetter <= 90){
      return true;
    }else{
      return false;
    }
  };
  
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let crypt = '';

    for (let i = 0, j = 0; i < message.length; i++){
      let currentLetter = message[i];
      if (VigenereCipheringMachine.isLetter(currentLetter)) {
        let numCryptLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].charCodeAt() - 65)) % 26;
        crypt = crypt + String.fromCharCode(numCryptLetter + 65);
        j++;
      }else{
        crypt = crypt + currentLetter;
      }
    }
    if (this.directState) {
      return crypt;
    } else {
      return crypt.split('').reverse().join('');
    }
  };

  decrypt(cryptMessage, key) {
    cryptMessage = cryptMessage.toUpperCase();
    key = key.toUpperCase();
    let decrypt = '';

    for (let i = 0, j = 0; i < cryptMessage.length; i++){
      let currentLetter = cryptMessage[i];
      if (VigenereCipheringMachine.isLetter(currentLetter)) {
        let numCryptLetter = Math.abs(( - currentLetter.charCodeAt() - 65) + (key[j % key.length].charCodeAt() - 65)) % 26;
        decrypt = decrypt + String.fromCharCode(numCryptLetter + 65);
        j++;
      }else{
        decrypt = decrypt + currentLetter;
      }
    }
    if (this.directState) {
      return decrypt;
    } else {
      return decrypt.split('').reverse().join('');
    }
  };
}

module.exports = VigenereCipheringMachine;
