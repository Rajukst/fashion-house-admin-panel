import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MyManage = ({prouct}) => {
    const {_id, name, image, imageTwo}= prouct
    return (
        <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`data:image/jpeg;base64,${image}`}
        alt="green iguana"
      />
      <CardMedia
        component="img"
        height="140"
        image={`data:image/jpeg;base64,${imageTwo}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    );
};

export default MyManage;