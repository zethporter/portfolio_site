
import './App.css';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './Components/header';
import Body from './Components/body';
import Footer from './Components/footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
const theme = createTheme({
    palette: {
      mode: 'dark',
      type: 'dark',
      primary: {
        main: '#152729',
      },
      primaryDark: {
        main: '#0C1516',
      },
      secondary: {
        main: '#d88895',
      },
      background: {
        paper: '#545454',
      },
    },
    typography: {
      fontFamily: 'Ubuntu',
    },
    shape: {
      borderRadius: 4,
    },
    props: {
      MuiButton: {
        size: 'small',
      },
      MuiButtonGroup: {
        size: 'small',
      },
      MuiCheckbox: {
        size: 'small',
      },
      MuiFab: {
        size: 'small',
      },
      MuiFormControl: {
        margin: 'dense',
        size: 'small',
      },
      MuiFormHelperText: {
        margin: 'dense',
      },
      MuiIconButton: {
        size: 'small',
      },
      MuiInputBase: {
        margin: 'dense',
      },
      MuiInputLabel: {
        margin: 'dense',
      },
      MuiRadio: {
        size: 'small',
      },
      MuiSwitch: {
        size: 'small',
      },
      MuiTextField: {
        margin: 'dense',
        size: 'small',
      },
    },
  });





const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body theme={theme} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
