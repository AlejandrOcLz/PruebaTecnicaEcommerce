import './top.web.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import DropdownButton from '../../dropdown/dropdown';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    background: `#E45DF5`,
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const TopWeb = () => {
  const navigate = useNavigate();
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartImage, setCartImage] = useState('/cart.png');
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(savedCartItems.length);

  useEffect(() => {
    const handleCartUpdated = () => {
      // Actualiza el estado de 'cartCount' cuando se emite el evento 'cartUpdated'
      const updatedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      const updatedItemCount = updatedCartItems ? updatedCartItems.length : 0;
      setCartCount(updatedItemCount);
    };
  
    window.addEventListener('cartUpdated', handleCartUpdated);
  
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdated);
    };
  }, []);


  function handleMouseEnter() {
    setCartImage('/cart2.png');
  }

  function handleMouseLeave() {
    setCartImage('/cart.png');
  }

  const pHSearch = "Search";
  const searchHandleButtonClick = (datab) => {
    console.log(datab);
    navigate('/shop', {
      state: {
        tittleValue: datab,
        categoryValue: "all",
        sliderValue: [0, 1000],
        mostratingValue: 0,
        viewValue: 0,
      }
    });
  };

  const handleButtonClick = () => {
    navigate('/shop', {
      state: {
        tittleValue: "all",
        categoryValue: "all",
        sliderValue: [0, 1000],
        mostratingValue: 0,
        viewValue: 0,
      }
    });
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Top">
      <div className="row">
        <a href="/home" id="ec"><h1>E-COMMERCE</h1></a>
        <div id="search">
          <input id="sinputs" placeholder={pHSearch} value={inputValue} onChange={handleInputChange}></input>
          <button id="sbuttons" onClick={() => searchHandleButtonClick(`${inputValue}`)}>
            <img src="/search.png" id="buttons" alt='buscador'></img>
          </button>
        </div>
        <button className="sbutton" onClick={handleButtonClick}>All the products</button>
        <button id="cbutton" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} onClick={toggleDropdown}>
          <div className="cart">
            <StyledBadge badgeContent={cartCount} color="primary">
              <img src={cartImage} id="buttonc" alt='Carrito'></img>
            </StyledBadge>
          </div>
        </button>
        {isOpen && <DropdownButton></DropdownButton>}
      </div>
    </div>
  );
};

export default TopWeb;
