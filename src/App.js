
import './App.css';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './Components/header';
import Body from './Components/body';
import Footer from './Components/footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#4a6670',
    },
    secondary: {
      main: '#d6a2ad',
    },
    info: {
      main: '#a0af84',
    },
  },
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});




const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
