import React from 'react';
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


const Price = ({ onChangePrice }) => {

    const [value, setValue] = React.useState([0, 1000]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      if (typeof onChangePrice === 'function') {
        onChangePrice(newValue);
      }
    };
  
    return (
      
        <Slider
            min={0}
            max={1000}
            getAriaLabel={() => 'prices'}
            value={value}
            marks={marks}
            onChange={handleChange}
            valueLabelDisplay="auto"
        />
          
    );
  }
  
  export default Price;