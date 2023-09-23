import HomeCards from '../homecards/homecards';
import React from 'react';
import './home.css';

const Home = () => {
    const sliders = [0, 1000];
    const prom = [0, 100];
    const mostratings = 3;
    const ratings = 5;
    const categories = "all";
    const view = 500;

    return(
        <div className="Home">
            <img id="backh" src="/fondo.jpg" alt='back'></img>
            <div className="row" id='cardpos'>
                <div className="card">
                    <HomeCards className="cards" name="HIGHEST RANKED" image="/rank.png" sliderValue={sliders} mostratingValue={mostratings} viewValue="0"></HomeCards>
                </div>
                <div className="card">
                    <HomeCards className="cards" name="PROMOTIONS" image="/prom.png" data="prom" sliderValue={prom} mostratingValue="0" viewValue="0"></HomeCards>
                </div>
                <div className="card">
                    <HomeCards className="cards" name="MOST VISITED" image="/view.png" data="view" sliderValue={sliders} mostratingValue="0" viewValue={view}></HomeCards>
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