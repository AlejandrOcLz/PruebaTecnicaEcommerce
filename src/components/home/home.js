import HomeCards from '../homecards/homecards';
import React from 'react';
import './home.css';

const Home = () => {
    return(
        <div className="Home">
            <img id="backh" src="/fondo.jpg"></img>
            <div class="row" id='cardpos'>
                <div class="card">
                    <HomeCards class="cards" name="MAYOR RANKEADOS" image="/rank.png"></HomeCards>
                </div>
                <div class="card">
                    <HomeCards class="cards" name="PROMOCIONES" image="/prom.png"></HomeCards>
                </div>
                <div class="card">
                    <HomeCards class="cards" name="MÁS VISITADOS" image="/view.png"></HomeCards>
                </div>
            </div>
            <div class="waves">
                <div class="wave circulo a"></div>
                <div class="wave circulo b"></div>
                <div class="wave circulo c"></div>
            </div>
            
        </div>
    )
}

export default Home;