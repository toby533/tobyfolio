import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import Navbar  from '../components/Navbar/Navbar';
import App from '../components/App';
import MailIcon from '../components/Mail/Mail';
import Toggle from '../components/Toggle/Toggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../useDarkMode';
import { lightTheme, darkTheme } from '../components/Theme';
import { GlobalStyles } from '../components/Global';

export default () => {

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const { title, lang, description } = headData;

  if (!componentMounted) {
    return <div />
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <MailIcon />
        <Navbar />
      </ThemeProvider>
    </>
  );
};
