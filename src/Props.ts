import { caeserEncryption, atbashEncryption, keyEncryption } from './Functions/EncryptionMethods';
import { caeserDecryption, atbashDecryption, keyDecryption } from './Functions/DecryptionMethods';
import Props from './PropsInterface';

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

export const key: Props = {
  name: "Key",
  encryption: keyEncryption,
  decryption: keyDecryption,
  hasOffset: false,
  hasKey: true
}
