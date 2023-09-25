import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Shop from "../../../components/shop/shop";
import Sidebar from "../../../components/sidebar/sidebar";
import '../articles.css';

function ArticlesWeb() {
  const [expanded, setExpanded] = useState('panel1');
  const location = useLocation();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const { sliderValue, mostratingValue, viewValue, tittleValue, categoryValue } = location.state || {};
  const [sliders, setSliders] = useState(sliderValue);
  const [ratings, setRatings] = useState(5);
  const [mostratings, setmostRatings] = useState(mostratingValue);
  const [categories, setCategories] = useState(categoryValue);
  const [views, setViews] = useState(viewValue);
  const [tittles, settittles] = useState(tittleValue);

  const handleFilter = (sliderValue, ratingValue, categoryValue, mostratingValue, viewValue, tittleValue) => {
    console.log(mostratingValue);
    setSliders(sliderValue);
    setRatings(ratingValue);
    setCategories(categoryValue);
    setmostRatings(mostratingValue);
    setViews(viewValue);
    settittles(tittleValue);
  };

  return (
    <div className="ArticlesWeb">
      <div className="rower">
        <Sidebar onFilter={handleFilter}></Sidebar>
        <Shop sliderValue={sliders} ratingValue={ratings} categoryValue={categories} mostratingValue={mostratings} viewValue={viewValue} tittleValue={tittleValue}></Shop>
      </div>
    </div>
  );
}

export default ArticlesWeb;
