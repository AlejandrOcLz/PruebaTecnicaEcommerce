import './top.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      background: `#E45DF5`,
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const Top = () => {

    const pHSearch = "Search";

    const [cartImage, setCartImage] = useState('/cart.png');

    function handleMouseEnter(){
        setCartImage('/cart2.png');
    }
    
    function handleMouseLeave(){
        setCartImage('/cart.png');
    }

    const navigate = useNavigate();

    const handleButtonClick = (datab) => {
        const productData = {artc: datab};
        navigate('/shop', {state:{productData}});
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return(
        <div className="Top">
            <div class="row">
                <a href="/home" id="ec"><h1>E-COMMERCE</h1></a>
                <div id="search">
                    <input id="sinputs" placeholder={pHSearch} value={inputValue} onChange={handleInputChange}></input>
                    <button id="sbuttons" onClick={() => handleButtonClick(`${inputValue}`)}>
                        <img src = "/search.png" id="buttons" alt='buscador'></img>
                    </button>
                </div>
                <button class="sbutton" onClick={() => handleButtonClick("*")}>All the products</button>
                <button id="cbutton" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} >
                    <div class="cart">
                        <StyledBadge badgeContent={5} color="secondary">
                            <img src = {cartImage} id="buttonc" alt='Carrito'></img>
                        </StyledBadge>
                        
                    </div>
                </button>

            </div>
        </div>
    );
        
}



export default Top;