import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const Shoppingcard = (properties) => {
    const { product, description } = properties;
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        // Obtener el carrito de compras del localStorage
        const existingCartData = JSON.parse(localStorage.getItem('cartData')) || { items: [] };
        const { items } = existingCartData;

        // Verificar si el producto ya existe en el carrito
        const existingItem = items.find((item) => item.product === product.product);

        if (existingItem) {
        // Si el producto existe, incrementar la cantidad
        existingItem.quantity += 1;
        } else {
        // Si el producto no existe, agregarlo al carrito
        items.push({ ...product, quantity: 1 });
        }

        // Actualizar el estado local y el localStorage
        setCartItems([...items]);
        localStorage.setItem('cartData', JSON.stringify(existingCartData));
    };

  useEffect(() => {
    // Obtener los elementos del carrito de compras del localStorage al cargar el componente
    const savedCartData = JSON.parse(localStorage.getItem('cartData'));
    if (savedCartData) {
      setCartItems(savedCartData.items);
    }
  }, []);

  useEffect(() => {
    // Actualizar el localStorage cuando cambian los elementos del carrito
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  const truncatedProduct = product.slice(0, 50) + (product.length > 50 ? '...' : '');
  const truncatedDescription = description.slice(0, 100) + (description.length > 100 ? '...' : '');

  return (
    <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 450, minHeight: 450 }} elevation={10}>
      <CardMedia component="img" alt="shop" height="200" image={properties.image} />
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
          $ {properties.price}
        </Typography>
        <Button size="small" onClick={() => addToCart(properties)}>
          Add to cart
        </Button>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Score: <Rating name="read-only" value={properties.rank} readOnly />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Shoppingcard;
