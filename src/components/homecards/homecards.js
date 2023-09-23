import React from 'react';
import { useNavigate } from 'react-router-dom';import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './homecards.css';


const HomeCards = (propierties) =>{

  const navigate = useNavigate();

  const handleButtonClick = (datab) => {
      const productData = {artc: datab};
      navigate('/shop', {state:{productData}});
  };

    return (
      <Card sx={{ maxWidth: 350}} elevation={10}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {propierties.name}
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image={propierties.image}
            alt="cards"
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleButtonClick(propierties.data)}>SEE MORE</Button>
        </CardActions>
      </Card>
    );
}

export default HomeCards;