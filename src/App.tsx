import { Title } from './ui/landing/title/Title';
import { lightTheme } from './ui/theme/theme';
import { ThemeProvider } from '@emotion/react';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Title />
    </ThemeProvider>
  );
};

export default App;
