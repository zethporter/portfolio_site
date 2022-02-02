import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



export default function header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" >
                 
          <Typography variant="h2" component="div" textAlign="center"  padding='10px' sx={{ flexGrow: 1 }}>
            Zeth Porter
          </Typography>
          <Typography variant="subtitle1" component="div" textAlign="center"  padding='5px' sx={{ flexGrow: 1 }}>
            The man the myth the legend
          </Typography>
          
            
      </AppBar>
    </Box>
  );
}