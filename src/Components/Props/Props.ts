import { caeserEncryption, atbashEncryption } from '../../Functions/EncryptionMethods';
import { caeserDecryption, atbashDecryption } from '../../Functions/DecryptionMethods';
import Props from '../../PropsInterface';

export const caeser: Props = {
  name: "Caeser",
  encryption: caeserEncryption,
  decryption: caeserDecryption,
  hasOffset: true,
  hasKey: false
}

export const atbash: Props = {
  name: "Atbash",
  encryption: atbashEncryption,
  decryption: atbashDecryption,
  hasOffset: false,
  hasKey: false
}

