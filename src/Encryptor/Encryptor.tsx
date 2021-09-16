import React, { useState } from "react";
import Props from '../PropsInterface';
import { isASCII } from "./Functions";
import './Encryptor.css';

export const Encryptor: React.FC<Props> = (Props) => {

  const { name, encryption, decryption, hasOffset, hasKey } = Props;
  const [encryptionInputClass, setEncryptionInputClass] = useState("encryption");
  const [decryptionInputClass, setDecryptionInputClass] = useState("decryption");

  const handlSubmit = (fromWhere: string, toWhere: string) => {
    const word = ((document.getElementById(`${fromWhere}`)) as HTMLInputElement).value;
    let offset;
    if(hasOffset){
      offset = parseInt(((document.getElementById("offset")) as HTMLInputElement).value);

      if(isNaN(offset)){
        ((document.getElementById(`${toWhere}`)) as HTMLInputElement).value = "Offset can not be lower than 1.";
        if(fromWhere === "encryption") setDecryptionInputClass(`${toWhere} error`);
        else setEncryptionInputClass(`${toWhere} error`);
        return;
      }
    }
    
    let output;

    if(!isASCII(word)) {
      output="Some letters or simbols in your entered text are not found in the ASCII table, please only use letter and simbols that are from the ASCII table.";
      if(fromWhere === "encryption") setDecryptionInputClass(`${toWhere} error`);
      else setEncryptionInputClass(`${toWhere} error`);
    }
    else {
      if(hasOffset) {
        if(fromWhere === "encryption") output = encryption(word, offset);
        else output = decryption(word, offset);
      }
      else {
        if(fromWhere === "encryption") output = encryption(word);
        else output = decryption(word);
      }

      if(fromWhere === "encryption") setDecryptionInputClass(`${toWhere}`);
      else setEncryptionInputClass(`${toWhere}`);      
    }

    ((document.getElementById(`${toWhere}`)) as HTMLInputElement).value = output;
  }

  const handleClipboard = (fromWhere: string) => {
    const text = ((document.getElementById(fromWhere)) as HTMLInputElement).value;
    navigator.clipboard.writeText(text);
  }

  return(
    <div>
      <h1>{name} algorithm</h1>
      {hasOffset && 
        <div>
          <h2>What offset do you want?</h2>
          <input id="offset" defaultValue="1" />
        </div>
      }
      {hasKey &&
        <div>
          <h2>What key do you want to encrypt/decrypt with?</h2>
          <input id="key" />
        </div>
      }
      <div>
        <h2>Encryption</h2>
        <input className={encryptionInputClass} id="encryption" onChange={() => setEncryptionInputClass("encryption")} />
        <button onClick={() => handleClipboard("encryption")}>Copy to clipboard</button>
        <button onClick={() => handlSubmit("encryption", "decryption")}>Encrypt</button>
      </div>
      <div>
        <h2>Decryption</h2>
        <input className={decryptionInputClass} id="decryption" onChange={() => setDecryptionInputClass("decryption")} />
        <button onClick={() => handleClipboard("decryption")}>Copy to clipboard</button>
        <button onClick={() => handlSubmit("decryption", "encryption")}>Decrypt</button>
      </div>
    </div>
  );
};