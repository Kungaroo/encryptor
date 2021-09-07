import { caeserEncryption, atbashEncryption } from '../../Functions/EncryptionMethods';
import { caeserDecryption, atbashDecryption } from '../../Functions/DecryptionMethods';
import Props from '../../PropsInterface';

export const caeser: Props = {
  name: "Caeser",
  encryption: caeserEncryption,
  decryption: caeserDecryption,
  hasOffset: true
}

export const atbash: Props = {
  name: "Atbash",
  encryption: atbashEncryption,
  decryption: atbashDecryption,
  hasOffset: false
}

// export const ROT13: Props = {
//   name: "ROT13",
//   encryption: 
// }