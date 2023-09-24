import React, {useState} from 'react'; // Importa React desde la biblioteca 'react'
import Footer from "../../components/footer/footer";
import Shop from "../../components/shop/shop";
import Sidebar from "../../components/sidebar/sidebar";
import Top from "../../components/top/top";
import { useLocation } from 'react-router-dom';
import './articles.css'

function Articles(){
    const location = useLocation();
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

    return(
        <div className="Articles">
            <header className="App-header">
                <Top></Top>
            </header>
            <div className="App-body">
                <div className="rower">
                    <Sidebar onFilter={handleFilter}></Sidebar>
                    <Shop sliderValue={sliders} ratingValue={ratings} categoryValue={categories} mostratingValue={mostratings} viewValue={viewValue} tittleValue={tittleValue}></Shop>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Articles;