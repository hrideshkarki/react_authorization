import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Product = ({productInfo}) => {
    const p = productInfo
    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" image={p.image} alt='product image'/>
                <CardContent className='card-content'>
                    <Typography gutterBottom variant="h5" component="div">
                        {p.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${p.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}
export default Product;