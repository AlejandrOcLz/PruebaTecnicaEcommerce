import './top.css';
import React, { useState, useEffect } from 'react';
import TopWeb from './web/top.web';
import TopMovil from './movil/top.movil';

const Top = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return(
        <div className="Top">
            {isMobile ? <TopMovil /> : <TopWeb />}
        </div>
    );
        
}



export default Top;