import React, {useState} from 'react'; // Importa React desde la biblioteca 'react'
import Footer from "../../components/footer/footer";
import Shop from "../../components/shop/shop";
import Sidebar from "../../components/sidebar/sidebar";
import Top from "../../components/top/top";
import { useLocation } from 'react-router-dom';
import './articles.css'

function Articles(){
    const location = useLocation();
    const {sliderValue, mostratingValue,viewValue } = location.state;

    const [sliders, setSliders] = useState(sliderValue);
    const [ratings, setRatings] = useState(5);
    const [mostratings, setmostRatings] = useState(mostratingValue);
    const [categories, setCategories] = useState("all");
    const [views, setViews] = useState(viewValue);
    
    const handleFilter = (sliderValue, ratingValue, categoryValue, mostratingValue, viewValue) => {
        console.log(mostratingValue);
        setSliders(sliderValue);
        setRatings(ratingValue);
        setCategories(categoryValue);
        setmostRatings(mostratingValue);
        setViews(viewValue);
    };

    return(
        <div className="Articles">
            <header className="App-header">
                <Top></Top>
            </header>
            <div className="App-body">
                <div className="rower">
                    <Sidebar onFilter={handleFilter}></Sidebar>
                    <Shop sliderValue={sliders} ratingValue={ratings} categoryValue={categories} mostratingValue={mostratings} viewValue={viewValue}></Shop>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Articles;