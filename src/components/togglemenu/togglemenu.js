import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import './togglemenu.css';
import Sidebar from '../../components/sidebar/sidebar';

  const DenseMenu = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
  
    const pHSearch = "Search";
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const sliderValue = [0, 1000];
    const mostratingValue = 0;
    const viewValue = 0;
    var tittleValue = "all";
    var categoryValue = "all";
  
    const searchHandleButtonClick = (datab) => {
      console.log(datab);
      navigate('/shop', {
        state: {
          tittleValue: datab,
          categoryValue,
          sliderValue,
          mostratingValue,
          viewValue,
        }
      });
      setInputValue('');
    };
  
    const handleButtonClick = () => {
        searchHandleButtonClick("all");
    };
  
    return (
      <div className='dense'>
        <Paper sx={{ width: 320 }}>
          <MenuList dense>
            <MenuItem>
              <ListItemText inset>E-COMMERCE</ListItemText>
            </MenuItem>
            <MenuItem>
              <div id="search">
                <input id="sinputs" placeholder={pHSearch} value={inputValue} onChange={handleInputChange}></input>
                <button id="sbuttons" onClick={() => searchHandleButtonClick(inputValue)}>
                  <img src="/search.png" id="buttons" alt='buscador'></img>
                </button>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem>
              <button className="sbuttonm" onClick={handleButtonClick}>All the products</button>
            </MenuItem>
          </MenuList>
        </Paper>
      </div>
    );
  }
  
  export default DenseMenu;