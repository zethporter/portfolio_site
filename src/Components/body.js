import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BodyContent from './bodyContent';
import Paper from '@mui/material/Paper';

export default function body() {
  return (
    <React.Fragment>
      <CssBaseline />
      
        <Box sx={{  bgcolor: '#282c34',  
                    width: '100%',
                    padding: '10px'
                     
                }}>
            <BodyContent />
            

        </Box> 
        
      
    </React.Fragment>
  );
}