import Shoppingcard from "../shoppingcard/shoppingcard";
import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import './shop.css'


const Shop = (properties) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la data.');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false); // Cambiar isLoading a falso cuando los datos se cargan
      })
      .catch((err) => {
        setError(err.message);
      });
    }, []);

    const products = data.map((item) => ({
        image: item.image,
        product: item.title,
        description: item.description,
        category: item.category,
        price: item.price.toString(),
        rank: item.rating.rate
      }));


    return(
        <div className="Shop">
            <div className="rowers" id="ord">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <div className="shor" key={index}>
                    <Skeleton variant="rectangular" width={300} height={450} />
                </div>
              ))) : (
                products.map((product, index) => (
                    <div className="shor" key={index}>
                        <Shoppingcard 
                            image={product.image}
                            product={product.product}
                            description={product.description}
                            price={product.price}
                            rank={product.rank}
                            category={product.category}></Shoppingcard>
                    </div>
                ))
                )}
            </div>
        </div>
    );
}

export default Shop;