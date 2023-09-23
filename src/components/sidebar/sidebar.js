import React, { useState } from 'react';
import './sidebar.css';
import Rating from '@mui/material/Rating';
import Price from '../price/price';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({onFilter}) => {

  const [sliderValue, setSliderValue] = useState([0, 1000]);
  const [ratingValue, setRatingValue] = useState(5);
  const [mostratings, setmostRatings] = useState(0);
  const [categoryValue, setCategoryValue] = useState("all");

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const handleCategoryChange = (event) => {
    setCategoryValue(event.target.value);
  };

  const handleButtonClick = () => {
    onFilter(sliderValue, ratingValue, categoryValue, mostratings);
  };

  return (
    <div className="Sidebar">
      <ul>
        <li>Price
          <br/>
          <Price onChangePrice={handleSliderChange}></Price>
        </li>
        <hr></hr>
        <li>Rating
          <br/>
          <Rating onChange={handleRatingChange} value={ratingValue}></Rating>
        </li>
        <hr></hr>
        <li>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={categoryValue}
            onChange={handleCategoryChange}
            name="radio-buttons-group"
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="women's clothing" control={<Radio />} label="Women's clothing" />
            <FormControlLabel value="men's clothing" control={<Radio />} label="Men's clothing" />
            <FormControlLabel value="jewelery" control={<Radio />} label="Jewelery" />
            <FormControlLabel value="electronics" control={<Radio />} label="Electronics" />
          </RadioGroup>
        </FormControl>
        </li>
        <hr></hr>
        <li id='filter'>
          <button className="btn" onClick={handleButtonClick}>Filter Products</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;