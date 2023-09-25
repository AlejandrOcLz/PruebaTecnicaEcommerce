import './top.movil.css';
import React, { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import DropdownButton from '../../dropdown/dropdown';
import DenseMenu from '../../togglemenu/togglemenu';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import cartImage from '../../../assets/cart.png';

const getCartItems = () => {
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  return savedCartItems && Array.isArray(savedCartItems)
    ? savedCartItems.map((item) => ({
        image: item.image,
        product: item.product,
        price: item.price,
        quantity: item.quantity
      }))
    : [];
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    background: `#E45DF5`,
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const TopMovil = () => {
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(getCartItems());
  const [cartCount, setCartCount] = useState(savedCartItems.length);

  const location = useLocation();
  const {
    sliderValue,
    mostratingValue,
    viewValue,
    tittleValue,
    categoryValue,
  } = location.state || {};

  const [sliders, setSliders] = useState(sliderValue);
  const [ratings, setRatings] = useState(5);
  const [mostratings, setMostRatings] = useState(mostratingValue);
  const [categories, setCategories] = useState(categoryValue);
  const [views, setViews] = useState(viewValue);
  const [tittles, setTittles] = useState(tittleValue);


  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setCartItems(getCartItems());
  }, []);

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

  const handleFilter = (
    sliderValue,
    ratingValue,
    categoryValue,
    mostratingValue,
    viewValue,
    tittleValue
  ) => {
    console.log(mostratingValue);
    setSliders(sliderValue);
    setRatings(ratingValue);
    setCategories(categoryValue);
    setMostRatings(mostratingValue);
    setViews(viewValue);
    setTittles(tittleValue);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Top">
      <div className="rowm">
        <button className='menu' onClick={toggleMenu}><MenuIcon  sx={{ fontSize: 40 }}/></button>
        <a href="/home" id="ec"><h1>EC</h1></a>
        <button id="cbutton" onClick={toggleDropdown}>
          <div className="cart">
            <StyledBadge badgeContent={cartCount} color="primary">
              <img src = {cartImage} id="buttonc" alt='Carrito'></img>
            </StyledBadge>
          </div>
        </button>
        {isOpen && <DropdownButton className="dropd"></DropdownButton>}
      </div>
      {menuOpen && <DenseMenu onFilter={handleFilter}></DenseMenu>}
    </div>
  );
};

export default TopMovil;