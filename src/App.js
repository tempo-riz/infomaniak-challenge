import Board from './components/Board';
import Container from '@mui/material/Container';
import Header from './components/Header';
import { IntlProvider } from 'react-intl'
import LanguageToogle from './components/Toogle';
import { useState } from 'react';
import EN from './data/cards-en.json';
import FR from './data/cards-fr.json';


const messages = {
  en: EN,
  fr: FR
};

export default function App() {

  const [locale, setLocale] = useState('fr');

  const handleToogle = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Container>
        <Header />
        <Board locale={locale}/>
        <LanguageToogle locale={locale} onToogle={handleToogle} />
      </Container>
    </IntlProvider>
  );
}