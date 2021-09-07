import React, { useState } from 'react';
import Dropdown from './Components/Dropdown/Dropdown';
import './App.css';
import { Encryptor } from './Components/Encryptors/Encryptor';
import { caeser, atbash } from './Components/Props/Props';

const App: React.FC = () => {

  const encryptions: any = [<Encryptor {...caeser} />, <Encryptor {...atbash} />];
  const options = ["Caeser", "Atbash"]
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <h1>Encryptor</h1>
      <button onClick={() => setIndex(index+1)}>change</button>
      <div className="Encryptions">
        {encryptions[index]}
      </div>
    </div>
  );
}

export default App;