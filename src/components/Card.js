import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Card({ name, hour, id}) {
    
    

    return(
        <ListItem>
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {id}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {hour}
                    </Typography>
                </CardContent>
            </React.Fragment>
        </ListItem>
    );
};


    
export default Card;