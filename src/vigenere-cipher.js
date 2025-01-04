const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  reverse = false;

  constructor(direct) {
    this.reverse = direct === false;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    };
    key = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for(let char of message) {
      let charCode = char.toUpperCase().charCodeAt();

      if(charCode < 65 || charCode > 90) {
        result.push(char);
        continue;
      };

      let shift = key[keyIndex].charCodeAt() - 65;
      result.push(String.fromCharCode(((charCode - 65 + shift) % 26) + 65));

      keyIndex = (keyIndex + 1) % key.length;
    };

    if(this.reverse) {
      result.reverse();
    };

    return result.join('');
  }

  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    };
    key = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for(let char of encryptedMessage) {
      let charCode = char.toUpperCase().charCodeAt();

      if(charCode < 65 || charCode > 90) {
        result.push(char);
        continue;
      };

      let shift = key[keyIndex].charCodeAt() - 65;
      result.push(String.fromCharCode(((charCode - 65 + 26 - shift) % 26) + 65));

      keyIndex = (keyIndex + 1) % key.length;
    };

    if(this.reverse) {
      result.reverse();
    };

    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
