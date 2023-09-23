import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
const Shoppingcard = (properties) => {

    const [value, setValue] = React.useState(properties.rank);
    const { product, description } = properties;

    const truncatedProduct = product.slice(0, 50) + (product.length > 50 ? '...' : '');
    const truncatedDescription = description.slice(0, 100) + (description.length > 100 ? '...' : '');


    return(
        <Card sx={{ maxWidth: 300, minWidth:20, maxHeight:500, minHeight:500}} elevation={10}>
            <CardMedia
                component="img"
                alt="shop"
                height="140"
                image={properties.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {truncatedProduct}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {truncatedDescription} 
                </Typography>
            </CardContent>
            <CardActions>
                <Typography gutterBottom component="div">
                $ {properties.price}    
                </Typography>
                <Button size="small">Add to cart</Button>
            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="h9" component="div">
                Score: <Rating name="read-only" value={properties.rank} readOnly />
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Shoppingcard;