import React from 'react';
import './sidebar.css';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '$ 0',
  },
  {
    value: 500,
    label: '$ 500',
  },
  {
    value: 1000,
    label: '$ 1000',
  },
];

function valuetext(value) {
  return `${value}`;
}

const Sidebar = () => {

  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Sidebar">
      <ul>
        <li>Price
          <br/>
          <Slider
            min={0}
            max={1000}
            getAriaLabel={() => 'prices'}
            value={value}
            marks={marks}
            onChange={handleChange}
            valueLabelDisplay="10000000"
            getAriaValueText={valuetext}
          />
        </li>
        <li>Item 2</li>
        <li>Item 3</li>
        {/* Agrega más elementos del menú aquí */}
      </ul>
    </div>
  );
}

export default Sidebar;