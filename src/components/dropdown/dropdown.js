import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './dropdown.css';
import SvgMaterialIcons from '../SvgMaterialIcons/SvgMaterialIcons';
const DropdownButton = () => {

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    let Products = [];

    // Comprobar si hay datos en el almacenamiento local
    if (savedCartItems) {
    console.log(savedCartItems); // Esto mostrará los datos del carrito en la consola
    } else {
    // Si no hay datos, puedes inicializar tu estado de cartItems
    }

    if (savedCartItems && Array.isArray(savedCartItems)) {
        Products = savedCartItems
        .map((item) => ({
        image: item.image,
        product: item.product,
        price: item.price,
        quantity: item.quantity
        }));
    }else{
    }
    

    useEffect(() => {
        let total = 0;
        for (const item of Products) {
          total += item.price * item.quantity;
        }
        setCartTotal(total);
      }, [cartItems]);

    const finish = () => {
        localStorage.clear();
    }

    
    return(
        <div className="drop">
            <ul className="store">

            {Products.length > 0 ? (
                Products.map((product, index) => (
                    <div className="shor" key={index}>
                        <li>
                            <div className="row" id='cartsh'>
                                <img src={product.image}></img>
                                <div className="stack">
                                    <h5>{product.product}</h5>
                                    <h2>$ {product.price}</h2>
                                    <h5>Cantidad: {product.quantity}</h5>
                                </div>
                            </div>
                        </li>
                        <hr></hr>
                    </div>   
                    ))
            ):(
                // Si la matriz Products está vacía, mostrar un mensaje de advertencia
                <div className="no-items">
                  You have not added articles yet.
                </div>
              )
            }
                
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