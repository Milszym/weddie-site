import {useEffect, useState} from 'react';
import {Title} from './ui/landing/title/Title';
import {Location} from './ui/landing/location/Location';
import {QA} from './ui/landing/qa/QA';
import {Witnesses} from './ui/landing/witnesses/Witnesses';
import {Gallery} from './ui/landing/gallery/Gallery';
import {RSVP} from './ui/landing/rsvp/RSVP';
import {Tables} from './ui/landing/tables/Tables';
import {Footer} from './ui/components/footer/Footer';
import {lightTheme} from './ui/theme/theme';
import {ThemeProvider} from '@emotion/react';
import {I18nextProvider} from 'react-i18next';
import i18n from './locales/i18n';

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

  return <>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={lightTheme}>
        <Title />
        <Location />
        <QA />
        <Witnesses />
        <Gallery />
        <RSVP />
        <Tables />
        <Footer />
      </ThemeProvider>
    </I18nextProvider>
  </>
};

export default App;
