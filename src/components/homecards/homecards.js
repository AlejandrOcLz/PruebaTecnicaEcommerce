import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './homecards.css';

const HomeCards = ({ name, image, sliderValue, viewValue, mostratingValue, tittleValue, categoryValue }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/shop', {
      state: {
        tittleValue,
        categoryValue,
        sliderValue,
        mostratingValue,
        viewValue,
      },
    });
  };

  return (
    <Card sx={{ minWidth: 150 }} elevation={10}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <CardMedia component="img" height="200" image={image} alt="cards" />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleButtonClick}>
          SEE MORE
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCards;
