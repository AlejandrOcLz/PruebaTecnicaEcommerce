import './top.movil.css';
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import DropdownButton from '../../dropdown/dropdown';
import DenseMenu from '../../togglemenu/togglemenu';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';



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

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const { sliderValue, mostratingValue, viewValue, tittleValue, categoryValue } = location.state || {};

    const [sliders, setSliders] = useState(sliderValue);
    const [ratings, setRatings] = useState(5);
    const [mostratings, setmostRatings] = useState(mostratingValue);
    const [categories, setCategories] = useState(categoryValue);
    const [views, setViews] = useState(viewValue);
    const [tittles, settittles] = useState(tittleValue);
    
    const handleFilter = (sliderValue, ratingValue, categoryValue, mostratingValue, viewValue, tittleValue) => {
        console.log(mostratingValue);
        setSliders(sliderValue);
        setRatings(ratingValue);
        setCategories(categoryValue);
        setmostRatings(mostratingValue);
        setViews(viewValue);
        settittles(tittleValue);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    let Products = [];

    if (savedCartItems) {
    console.log(savedCartItems); 
    } else {
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

    const [cartImage, setCartImage] = useState('/cart.png');

    function handleMouseEnter(){
        setCartImage('/cart2.png');
    }
    
    function handleMouseLeave(){
        setCartImage('/cart.png');
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="Top">
           
            <div className="rowm">
                <button className='menu' onClick={toggleMenu}><MenuIcon  sx={{ fontSize: 40 }}/></button>
                <a href="/home" id="ec"><h1>EC</h1></a>
                <button id="cbutton" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} onClick={toggleDropdown}>
                    <div className="cart">
                        <StyledBadge badgeContent={Products.length} color="primary">
                            <img src = {cartImage} id="buttonc" alt='Carrito'></img>
                        </StyledBadge>
                    </div>
                </button>
                {isOpen && (
                    <DropdownButton className="dropd"></DropdownButton>
                )}
            </div>
            {menuOpen && (
                <DenseMenu onFilter={handleFilter}></DenseMenu>
            )}
        </div>
    );
        
}



export default TopMovil;