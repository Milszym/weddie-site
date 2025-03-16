import { useEffect, useState } from 'react';
import { lightTheme } from './ui/theme/theme';
import { ThemeProvider } from '@emotion/react';
import { AppContent } from './ui/AppContent';

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
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
