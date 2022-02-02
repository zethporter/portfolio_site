import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BodyCard from './bodyCard';

export default function body() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{  bgcolor: '#cfe8fc', 
                    height: '100vh', 
                    width: '100%' 
                }}>
            <BodyCard />
        </Box>        
      </Container>
    </React.Fragment>
  );
}