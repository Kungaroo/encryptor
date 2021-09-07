import React, { useState } from "react";
import Props from '../../PropsInterface';
import { isASCII } from "./Functions";
import './Encryptor.css';

export const Encryptor: React.FC<Props> = (Props) => {

  const { name, encryption, decryption, hasOffset } = Props;
  const [encryptionInputClass, setEncryptionInputClass] = useState("encryption");
  const [decryptionInputClass, setDecryptionInputClass] = useState("decryption");

  const handleEncryption = () => {
    const word = ((document.getElementById("encryption")) as HTMLInputElement).value;
    try{
      const offset = parseInt(((document.getElementById("offset")) as HTMLInputElement).value);

      if (hasOffset && offset < 1) {
        ((document.getElementById("decryption")) as HTMLInputElement).value = "Offset can not be lower than 1.";
        setDecryptionInputClass("decryption error");
      }

      return;
    }
    catch{}
    
    let output;

    if(!isASCII(word)) {
      output="Some letters or simbols in your entered text are not found in the ASCII table, please only use letter and simbols that are from the ASCII table.";
      
      setDecryptionInputClass("decryption error");
    }
    else {
      output = encryption(word);
      setDecryptionInputClass("decryption");
    }

    ((document.getElementById("decryption")) as HTMLInputElement).value = output;
  }

  const handleDecryption = () => {
    const word = ((document.getElementById("decryption")) as HTMLInputElement).value;
    try{
      const offset = parseInt(((document.getElementById("offset")) as HTMLInputElement).value);

      if (hasOffset && offset < 1) {
        ((document.getElementById("decryption")) as HTMLInputElement).value = "Offset can not be lower than 1.";
        setEncryptionInputClass("encryption error");
      }

      return;
    }
    catch{}
    let output;

    if(!isASCII(word)) {
      output="Some letters or simbols in your entered text are not found in the ASCII table, please only use letter and simbols that are from the ASCII table.";
      setEncryptionInputClass("encryption error");
    }
    else{
      output = decryption(word);
      setEncryptionInputClass("encryption");
    }
    
    ((document.getElementById("encryption")) as HTMLInputElement).value = output;
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
      <div>
        <h2>Encryption</h2>
        <input className={encryptionInputClass} id="encryption" onChange={() => setEncryptionInputClass("encryption")} />
        <button onClick={handleEncryption}>Encrypt</button>
      </div>
      <div>
        <h2>Decryption</h2>
        <input className={decryptionInputClass} id="decryption" onChange={() => setDecryptionInputClass("decryption")} />
        <button onClick={handleDecryption}>Decrypt</button>
      </div>
    </div>
  );
};