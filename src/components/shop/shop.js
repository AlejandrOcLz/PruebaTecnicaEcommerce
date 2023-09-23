import Shoppingcard from "../shoppingcard/shoppingcard";
import React, { useState, useEffect } from 'react';
import './shop.css'


const Shop = (properties) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

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
          })
          .catch((err) => {
            setError(err.message);
          });
    }, []);

    var image = "image";
    var product = "title";
    var description = "description";
    var price = 0;
    var rank = 0;
    var category = "0";

    data.map((item) => (
        product = item.title,
        image = item.image,
        description = item.description,
        category = item.category,
        price = item.price,
        rank = item.rating.rate
    ));

    // const products = data.map((item) => ({
    //     image: item.image,
    //     product: item.title,
    //     description: item.description,
    //     category: item.category,
    //     price: item.price.toString(),
    //     rank: item.rating.rate
    //   }));

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
            <div class="rowers" id="ord">
                {products.map((product, index) => (
                    <div class="shor">
                        <Shoppingcard 
                            image={product.image}
                            product={product.product}
                            description={product.description}
                            price={product.price}
                            rank={product.rank}
                            category={product.category}></Shoppingcard>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;