import HomeCards from '../homecards/homecards';
import React from 'react';
import './home.css';

const Home = () => {
    return(
        <div className="Home">
            <img id="backh" src="/fondo.jpg" alt='back'></img>
            <div className="row" id='cardpos'>
                <div className="card">
                    <HomeCards className="cards" name="HIGHEST RANKED" image="/rank.png" data="rank"></HomeCards>
                </div>
                <div className="card">
                    <HomeCards className="cards" name="PROMOTIONS" image="/prom.png" data="prom"></HomeCards>
                </div>
                <div className="card">
                    <HomeCards className="cards" name="MOST VISITED" image="/view.png" data="view"></HomeCards>
                </div>
            </div>
            <div className="waves">
                <div className="wave circulo a"></div>
                <div className="wave circulo a"></div>
            </div>
            
        </div>
    )
}

export default Home;