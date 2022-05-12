import * as React from 'react';

import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BodyCard from './bodyCard';
import { NoEncryption } from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900]: theme.palette.grey[300],
  ...theme.typography.body2,
  padding: theme.spacing(0),
  margin: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function body({ theme }) {
  return (
    <Box 
        backgroundColor={theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[300]} 
        sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Item><BodyCard theme={theme} /></Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item><BodyCard theme={theme} /></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><BodyCard theme={theme} /></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><BodyCard theme={theme} /></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><BodyCard theme={theme} /></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><BodyCard theme={theme} /></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><BodyCard theme={theme} /></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><BodyCard theme={theme} /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}