import { ThemeProvider, createTheme } from '@mui/material';
import { Title } from './ui/landing/title/Title';

// Create a custom theme using MUI's theme system
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#dc004e', // pink
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Title />
    </ThemeProvider>
  );
};

export default App;
