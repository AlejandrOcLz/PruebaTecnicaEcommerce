import Footer from '../../components/footer/footer';
import React from 'react';
import Home from '../../components/home/home';
import Top from '../../components/top/top';
import './starter.css';

function Starter(){
    return(
        <div className="App">
          <header className="App-header">
            <Top></Top>
          </header>
          <div className="App-body">
            <Home></Home>
          </div>
          <Footer></Footer>
        </div>
      );
}

export default Starter;