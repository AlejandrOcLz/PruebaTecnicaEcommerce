import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Shoppingcard from "../shoppingcard/shoppingcard";
import './shop.css'

const Shop = ({ typeD,sliderValue, ratingValue, categoryValue, mostratingValue, viewValue, tittleValue, search }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  


  const filteredProducts = data
    .map((item) => ({
      image: item.image,
      product: item.title,
      description: item.description,
      category: item.category,
      price: item.price,
      rank: item.rating.rate,
      view: item.rating.count
    }))
    .filter((product) => {
      
      const priceInRange = sliderValue && sliderValue.length === 2 && product.price >= sliderValue[0] && product.price <= sliderValue[1];
      const ratingMatches = product.rank <= ratingValue;
      const categoryMatches = categoryValue === "all" || product.category === categoryValue;
      const tittleMatches = product.product.toLowerCase().includes(tittleValue.toLowerCase()) || tittleValue === "all";
      const mostratingMatches = product.rank >= mostratingValue;
      const viewMatches = product.view >= viewValue;

      console.log(product.product.toLowerCase());
      return priceInRange && ratingMatches && categoryMatches && mostratingMatches && viewMatches && tittleMatches;
    });

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
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [sliderValue, ratingValue, categoryValue, mostratingValue, tittleValue]);

  // ...

  return (
    <div className="Shop">
      <div className="rowers" id="ord">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div className="shor" key={index}>
              <Skeleton variant="rectangular" width={300} height={450} />
            </div>
          ))
        ) : (
          filteredProducts.map((product, index) => (
            <div className="shor" key={index}>
              <Shoppingcard
                image={product.image}
                product={product.product}
                description={product.description}
                price={product.price}
                rank={product.rank}
                category={product.category}
              ></Shoppingcard>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;