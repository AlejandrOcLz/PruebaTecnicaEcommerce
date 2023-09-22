import Footer from "../../components/footer/footer";
import Top from "../../components/top/top";
import { useLocation } from 'react-router-dom';

function Articles(){
    const location = useLocation();
    const { productData } = location.state;
    return(
        <div className="Articles">
            <header>
                <Top></Top>
            </header>
            <body>
                {/* <p>Nombre del producto: {productData.artc}</p> */}
            </body>
            <Footer></Footer>

        </div>
    );
}

export default Articles;