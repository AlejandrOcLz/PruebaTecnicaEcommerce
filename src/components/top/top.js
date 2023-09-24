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

    const sliderValue = [0, 1000];
    const mostratingValue = 0;
    const viewValue = 0;
    var tittleValue = "all";
    var categoryValue = "all";

    const searchHandleButtonClick = (datab) => {
        console.log(datab);
        navigate('/shop', {
            
            state:{
                tittleValue:datab,
                categoryValue,
                sliderValue,
                mostratingValue,
                viewValue,
            }
        });
      };

    const handleButtonClick = () => {
        
        navigate('/shop', {
            state:{
                tittleValue,
                categoryValue,
                sliderValue,
                mostratingValue,
                viewValue,
            }
        });
        setInputValue('');
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return(
        <div className="Top">
            <div className="row">
                <a href="/home" id="ec"><h1>E-COMMERCE</h1></a>
                <div id="search">
                    <input id="sinputs" placeholder={pHSearch} value={inputValue} onChange={handleInputChange}></input>
                    <button id="sbuttons" onClick={() => searchHandleButtonClick(`${inputValue}`)}>
                        <img src = "/search.png" id="buttons" alt='buscador'></img>
                    </button>
                </div>
                <button className="sbutton" onClick={() => handleButtonClick(sliderValue, mostratingValue, viewValue, tittleValue)}>All the products</button>
                <button id="cbutton" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} >
                    <div className="cart">
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