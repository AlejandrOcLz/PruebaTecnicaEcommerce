import HomeCards from '../homecards/homecards';
import React from 'react';
import './home.css';

const Home = () => {
    return(
        <div className="Home">
            <img id="backh" src="/fondo.jpg"></img>
            <div class="row" id='cardpos'>
                <div class="card">
                    <HomeCards class="cards" name="HIGHEST RANKED" image="/rank.png" data="rank"></HomeCards>
                </div>
                <div class="card">
                    <HomeCards class="cards" name="PROMOTIONS" image="/prom.png" data="prom"></HomeCards>
                </div>
                <div class="card">
                    <HomeCards class="cards" name="MOST VISITED" image="/view.png" data="view"></HomeCards>
                </div>
            </div>
            <div class="waves">
                <div class="wave circulo a"></div>
                <div class="wave circulo a"></div>
            </div>
            
        </div>
    )
}

export default Home;