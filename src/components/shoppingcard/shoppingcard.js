import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const Shoppingcard = (properties) => {
  const { product, description, image, price, rank } = properties;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartData = JSON.parse(localStorage.getItem('cartData'));
    if (savedCartData) {
      setCartItems(savedCartData.items);
    }

    
  }, []);

  const addToCart = (product) => {
    const existingCartData = JSON.parse(localStorage.getItem('cartData')) || { items: [] };
    const { items } = existingCartData;

    const existingItemIndex = items.findIndex((item) => item.product === product.product);

    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }

    setCartItems([...items]);

    localStorage.setItem('cartData', JSON.stringify(existingCartData));
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const savedCartData = JSON.parse(localStorage.getItem('cartData'));
    if (savedCartData) {
      setCartItems(savedCartData.items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const truncatedProduct = product.slice(0, 50) + (product.length > 50 ? '...' : '');
  const truncatedDescription = description.slice(0, 100) + (description.length > 100 ? '...' : '');

  return (
    <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 450, minHeight: 450 }} elevation={10}>
      <CardMedia component="img" alt="shop" height="200" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {truncatedProduct}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncatedDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom component="div">
          $ {price}
        </Typography>
        <Button size="small" onClick={() => addToCart(properties)}>
          Add to cart
        </Button>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Score: <Rating name="read-only" value={rank} readOnly />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Shoppingcard;
