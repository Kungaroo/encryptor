import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown: React.FC = () => {

  const [open, setOpen] = useState(false);

  const DropdownItem: React.FC = (props) => {
    return(
      <button className="menu-item">
        {props.children}
      </button>
    );
  };

  const DropdownMenu: React.FC = (props) => {
    return(
      <li className="dropdown">
        <DropdownItem>Caesar</DropdownItem>
        <DropdownItem>Atbash</DropdownItem>
      </li>
    );
  };

  return(
    <li>
      <button onClick={() => setOpen(!open)}>
        {'>'}
      </button>

      {open && <DropdownMenu />}
    </li>
  );
};

export default Dropdown;