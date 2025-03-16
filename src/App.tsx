import { useEffect, useState } from 'react';
import { Title } from './ui/landing/title/Title';
import { lightTheme } from './ui/theme/theme';
import { ThemeProvider } from '@emotion/react';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Title />
    </ThemeProvider>
  );
};

export default App;
