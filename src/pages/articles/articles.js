import React, {useState, useEffect} from 'react'; // Importa React desde la biblioteca 'react'
import './articles.css'
import ArticlesWeb from './web/articles.web';
import ArticlesMovil from './movil/articles.movil';
import Top from "../../components/top/top";
import Footer from "../../components/footer/footer";


function Articles(){
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
        <div className="Articles">
            <header className="App-header">
                <Top></Top>
            </header>
            <div className="App-body article">
                {isMobile ? <ArticlesMovil /> : <ArticlesWeb />}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Articles;