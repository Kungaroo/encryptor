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
    <div className="encryptor">
      <h2>{name} algorithm</h2>
      {hasOffset && 
        <div>
          <h3>What offset do you want?</h3>
          <input id="offset" defaultValue="1" />
        </div>
      }
      {hasKey &&
        <div>
          <h3>What key do you want to encrypt/decrypt with?</h3>
          <input id="key" />
        </div>
      }
      <div className="input">
        <h3>Encryption</h3>
        <input className={encryptionInputClass} id="encryption" onChange={() => setEncryptionInputClass("encryption")} />
        <div className="buttons">
          <button className="clipboard" onClick={() => handleClipboard("encryption")}>Copy to clipboard</button>
          <button className="button" onClick={() => handlSubmit("encryption", "decryption")}>Encrypt</button>
        </div>
      </div>
      <div className="input">
        <h3>Decryption</h3>
        <input className={decryptionInputClass} id="decryption" onChange={() => setDecryptionInputClass("decryption")} />
        <div className="buttons">
          <button className="clipboard" onClick={() => handleClipboard("decryption")}>Copy to clipboard</button>
          <button className="button" onClick={() => handlSubmit("decryption", "encryption")}>Decrypt</button>
        </div>
      </div>
    </div>
  );
};