import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BodyCard from './bodyCard';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container
            justifyContent="center"
            spacing={3}>
        <Grid item xs="auto">
          <BodyCard />
        </Grid>
        <Grid item xs="auto">
        <BodyCard />
        </Grid>
        <Grid item xs="auto">
        <BodyCard />
        </Grid>
      </Grid>
    </Box>
  );
}
