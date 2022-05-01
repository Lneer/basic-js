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
  constructor(isDirect = true) {
    this._isDirect = isDirect
  }
  encrypt(message, key) {
    if (typeof(message)=="undefined" || typeof(key)=="undefined") {throw new Error("Incorrect arguments!")}
    let encryptedStr =""
    message = message.toUpperCase()

    let srtringedMessage = message.replace(/[^A-Za-z]/g,"" )
   // console.log(srtringedMessage)
    key = key.toUpperCase()
    if(key.length !== srtringedMessage.length){
        if (srtringedMessage.length - key.length < 0) {
          key = key.slice(0,srtringedMessage.length)
      } else{
        let k =0;
        while(key.length !== srtringedMessage.length){
          key = key + key[k]
          k++
          if(k == key.length) k=0
        }
      }
    }
   for (let i =0; i < srtringedMessage.length; i++) {
     let symb = ((srtringedMessage[i].codePointAt() + key[i].codePointAt()) - 130 ) % 26 + 65
     encryptedStr = encryptedStr + String.fromCodePoint(symb)
   }

    for (let i=0; i< message.length; i++){
      if (message[i].codePointAt() <65 || message[i].codePointAt() > 90){
        encryptedStr = encryptedStr.slice(0, i) + message[i] + encryptedStr.slice(i, encryptedStr.length)
      }
    }
    if (this._isDirect) return encryptedStr 
    else {return encryptedStr.split("").reverse().join("")}
  }

  decrypt(message, key) {
    if (typeof(message)=="undefined" || typeof(key)=="undefined") {throw new Error("Incorrect arguments!")}
    let decryptedStr =""
    message = message.toUpperCase()
    let srtringedMessage = message.replace(/[^A-Za-z]/g,"" )
    key = key.toUpperCase()
    if(key.length !== srtringedMessage.length){
        if (srtringedMessage.length - key.length < 0)  {
          key = key.slice(0,srtringedMessage.length)
      } else{
        let k =0;
        while(key.length !== srtringedMessage.length){
          key = key + key[k]
          k++
          if(k == key.length) k=0
        }
      }
    }
    console.log(key)
    console.log(srtringedMessage)

   for (let i =0; i< srtringedMessage.length; i++) {
     let symb =  ((srtringedMessage[i].codePointAt() - 65 +  Math.abs(-91+key[i].codePointAt()) ))%26 +65
     decryptedStr = decryptedStr + String.fromCodePoint(symb)
   }

    for (let i=0; i< message.length; i++){
      if (message[i].codePointAt()<65 || message[i].codePointAt() >90){
        decryptedStr = decryptedStr.slice(0, i) + message[i] + decryptedStr.slice(i, decryptedStr.length)
      }
    }
    if (this._isDirect) return decryptedStr 
    else {return decryptedStr.split("").reverse().join("")}
  }

}
const directMachine = new VigenereCipheringMachine();
let a = directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')
console.log(a)

module.exports = {
  VigenereCipheringMachine
};
