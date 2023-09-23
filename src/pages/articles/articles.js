import React from 'react'; // Importa React desde la biblioteca 'react'
import Footer from "../../components/footer/footer";
import Shop from "../../components/shop/shop";
import Sidebar from "../../components/sidebar/sidebar";
import Top from "../../components/top/top";
import { useLocation } from 'react-router-dom';
import './articles.css'

function Articles(){

    var sliders;
    var ratings = 0;
    var categories = "all";
    
    const handleFilter = (sliderValue, ratingValue, categoryValue) => {
        
        sliders = sliderValue;
        ratings = ratingValue;
        categories = categoryValue;
        console.log("Slider Value:", sliderValue);
        console.log("Rating Value:", ratingValue);
        console.log("Category Value:", categoryValue);
    };

    const location = useLocation();
    const { productData } = location.state;

    return(
        <div className="Articles">
            <header className="App-header">
                <Top></Top>
            </header>
            <div className="App-body">
                <div className="rower">
                    <Sidebar onFilter={handleFilter}></Sidebar>
                    <Shop typeD={productData.artc} sliderValue={sliders} ratingValue={ratings} categoryValue={categories}></Shop>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Articles;