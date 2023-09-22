import Box from '@mui/material/Box';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './homecards.css';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '5px', transform: 'scale(1)' }}
    >
      •
    </Box>
  );
const HomeCards = (propierties) =>{
    return (
      <Card sx={{ maxWidth: 350}}>
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
          <Button size="small">VER MÁS</Button>
        </CardActions>
      </Card>
    );
}

export default HomeCards;