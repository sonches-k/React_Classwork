import { useState } from 'react';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import { ArticleList } from './components/ArticleList';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import './components/AccordionArticle.scss';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light', // тема
      primary: {
        main: isDarkMode ? '#0000ff' : '#000000', // цвет аккордеонов 
      },
    },
    typography: {
      fontFamily: 'Times New Roman, serif', // шрифт красивый
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container >
        <ThemeSwitcher setIsDarkMode={setIsDarkMode} />
        <ArticleList isDarkMode={isDarkMode} /> {/* передаем пропс для темы */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
