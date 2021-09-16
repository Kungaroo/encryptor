import React, { useState } from 'react';
import Dropdown from './Components/Dropdown/Dropdown';
import './App.css';
import { Encryptor } from './Components/Encryptors/Encryptor';
import { caeser, atbash } from './Components/Props/Props';

const App: React.FC = () => {

  const encryptions: any = [<Encryptor {...caeser} />, <Encryptor {...atbash} />];
  const options = ["Caeser", "Atbash"]
  const [index, setIndex] = useState(0);

  const handleSelect = () => {
    setIndex(((document.getElementById("cypher")) as HTMLSelectElement).selectedIndex);
  }

  return (
    <div className="App">
      <h1>Encryptor</h1>
      <select id="cypher" onChange={handleSelect}>
        <option selected value="0">Caesers</option>
        <option value="1">Atbash</option>
      </select>
      <div className="Encryptions">
        {encryptions[index]}
      </div>
    </div>
  );
}

export default App;