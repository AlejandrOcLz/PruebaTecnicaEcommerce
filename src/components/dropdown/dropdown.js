import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './dropdown.css';
import SvgMaterialIcons from '../SvgMaterialIcons/SvgMaterialIcons';
import { Button } from '@mui/material';

const DropdownButton = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [product, setProduct] = useState('');
  const [forceUpdate, setForceUpdate] = useState(false); // Estado local para forzar actualizaciones

  const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  let Products = [];

  if (savedCartItems && Array.isArray(savedCartItems)) {
    Products = savedCartItems.map((item) => ({
      image: item.image,
      product: item.product,
      price: item.price,
      quantity: item.quantity,
      keys: item.key,
    }));
  } else {
  }

  

  useEffect(() => {
    let total = 0;
    for (const item of Products) {
      total += item.price * item.quantity;
    }
    setCartTotal(total);
  }, [cartItems]);

  const truncatextpr = (index) => {
    return Products.length > 0
      ? Products[index].product.slice(0, 20) + (Products.length > 1 ? '...' : '')
      : '';
  };

  useEffect(() => {
    const savedCartData = JSON.parse(localStorage.getItem('cartData'));
    if (savedCartData) {
      setCartItems(savedCartData.items);
    }
  }, []);

  const finish = () => {
    localStorage.clear();
  };

  const removeProduct = (productName) => {
    // Obtener la lista de productos del almacenamiento local
    const existingCartData = JSON.parse(localStorage.getItem('cartData')) || { items: [] };
    const { items } = existingCartData;
  
    // Encuentra el índice del producto que deseas eliminar
    const productIndex = items.findIndex((item) => item.product === productName);
  
    if (productIndex !== -1) {
      // Elimina el producto de la lista
      items.splice(productIndex, 1);
  
      // Actualiza la lista de productos en el almacenamiento local
      localStorage.setItem('cartData', JSON.stringify(existingCartData));
    }
  
    // setCartItems([...items]);
    const updatedCartItems = cartItems.filter((item) => item.product !== productName);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  
    setForceUpdate(!forceUpdate);
  };

  return (
    <div className="drop">
      <ul className="store">
        {Products.length > 0 ? (
          Products.map((product, index) => (
            <div className="shor" key={index}>
              <li>
                <div className="row" id='cartsh'>
                  <img src={product.image}></img>
                  <div className="stack">
                    <h5>{truncatextpr(index)}</h5>
                    <h2>$ {product.price}</h2>
                    <h5>Quantity: {product.quantity}</h5>
                  </div>
                  <Button className='delete' onClick={() => removeProduct(product.product)}>Delete</Button>
                </div>
              </li>
              <hr></hr>
            </div>
          ))
        ) : (
          // Si la matriz Products está vacía, mostrar un mensaje de advertencia
          <div className="no-items">
            You have not added articles yet.
          </div>
        )}
        <li>
          <h4>Total: $ {cartTotal}</h4>
          <div className='row'>
            <button className="btni" onClick={finish}>
              <SvgMaterialIcons></SvgMaterialIcons>
            </button>
            <button className="btnc" onClick={finish}>
              proceed payment
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DropdownButton;
