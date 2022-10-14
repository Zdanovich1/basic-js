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

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    message = message.toUpperCase().split('');

    //находим небуквенные символы и пробелы и удаляем их из строки message
    let indexNonAlphabetSymbols = [];
    let NonAlphabetSymbols = [];

    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        indexNonAlphabetSymbols.push(i);
        NonAlphabetSymbols.push(message[i]);
      }
    }

    for (let i = 0; i < NonAlphabetSymbols.length; i++) {
      for (let j = 0; j < message.length; j++) {
        if (NonAlphabetSymbols[i] === message[j]) {
          message.splice(j, 1)
        }
      }
    }

    //---------------------------------------------

    key = key.toUpperCase();
    let resultKey = key.repeat(1000).slice(0, message.length)
    let indexKeyLetters = [];
    let resultArr = [];

    for (let i = 0; i < resultKey.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (resultKey[i] === alphabet[j]) {
          indexKeyLetters.push(j)
        }
      }
    }

    for (let n = 0; n < message.length; n++) {
      for (let m = 0; m < alphabet.length; m++) {
        if (message[n] === alphabet[m]) {
          resultArr.push(alphabet[(m + indexKeyLetters[n]) % 26])
        } else if (message[n] === " " || message[n] === "!") {
          resultArr.push(message[n])
          break
        }
      }
    }
    //добавляем убранные ранее небуквенные символы и пробелы
    for (let i = 0; i < NonAlphabetSymbols.length; i++) {
      resultArr.splice(indexNonAlphabetSymbols[i], 0, NonAlphabetSymbols[i])
    }
    return this.direct ? resultArr.join('').trim() : resultArr.reverse().join('').trim();
  }

  decrypt(encriptedMessage, key) {
    if (!encriptedMessage || !key) throw new Error(`Incorrect arguments!`);

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    encriptedMessage = encriptedMessage.toUpperCase().split('');

    //находим небуквенные символы и пробелы и удаляем их из строки message
    let indexNonAlphabetSymbols = [];
    let NonAlphabetSymbols = [];

    for (let i = 0; i < encriptedMessage.length; i++) {
      if (!alphabet.includes(encriptedMessage[i])) {
        indexNonAlphabetSymbols.push(i);
        NonAlphabetSymbols.push(encriptedMessage[i]);
      }
    }

    for (let i = 0; i < NonAlphabetSymbols.length; i++) {
      for (let j = 0; j < encriptedMessage.length; j++) {
        if (NonAlphabetSymbols[i] === encriptedMessage[j]) {
          encriptedMessage.splice(j, 1)
        }
      }
    }
    //---------------------------------------------
    key = key.toUpperCase();
    let resultKey = key.repeat(1000).slice(0, encriptedMessage.length)
    let indexKeyLetters = [];
    let resultArr = [];

    for (let i = 0; i < resultKey.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (resultKey[i] === alphabet[j]) {
          indexKeyLetters.push(j)
        }
      }
    }

    for (let n = 0; n < encriptedMessage.length; n++) {
      for (let m = 0; m < alphabet.length; m++) {
        if (encriptedMessage[n] === alphabet[m]) {
          resultArr.push(alphabet[(m - indexKeyLetters[n] + 26) % 26])
        } else if (encriptedMessage[n] === " " || encriptedMessage[n] === "!") {
          resultArr.push(encriptedMessage[n])
          break
        }
      }
    }
    //добавляем убранные ранее небуквенные символы и пробелы
    for (let i = 0; i < NonAlphabetSymbols.length; i++) {
      resultArr.splice(indexNonAlphabetSymbols[i], 0, NonAlphabetSymbols[i])
    }
    return this.direct ? resultArr.join('').trim() : resultArr.reverse().join('').trim();
  }
}


module.exports = {
  VigenereCipheringMachine
};
