import React from 'react'; // Importa React desde la biblioteca 'react'
import Footer from "../../components/footer/footer";
import Shop from "../../components/shop/shop";
import Shoppingcard from "../../components/shoppingcard/shoppingcard";
import Sidebar from "../../components/sidebar/sidebar";
import Top from "../../components/top/top";
import { useLocation } from 'react-router-dom';
import './articles.css'

function Articles(){
    

    const location = useLocation();
    const { productData } = location.state;

    return(
        <div className="Articles">
            <header className="App-header">
                <Top></Top>
            </header>
            <body className="App-body">
            <div className="rower">
                <Sidebar ></Sidebar>
                <Shop typeD={productData.artc}></Shop>
            </div>
                
            </body>
            <Footer></Footer>
        </div>
    );
}

export default Articles;