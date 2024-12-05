// AccordionArticle.tsx
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AccordionArticle.scss'; // Подключаем SCSS для стилизации

interface AccordionArticleProps {
  title: string;
  content: string;
  isOdd: boolean; // Пропс для определения четности статьи
  isDarkMode: boolean; // Пропс для темы
}

export const AccordionArticle: React.FC<AccordionArticleProps> = ({ title, content, isOdd, isDarkMode }) => {
  return (
    <Accordion
      sx={{
        width: '100%', // растягиваем аккордеон на всю ширину
        border: '1px solid transparent',
        backgroundColor: isOdd ? '#0000ff' : '#000000',
        '&:hover': {
          borderColor: 'red', // подсвечиваем при наведении
        },
      }}
      className={`accordion ${isOdd ? 'odd' : 'even'} ${isDarkMode ? 'dark' : 'light'}`} 
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className="article-title">
          <span className="first-letter">{title.charAt(0)}</span> {/* выделяем первую букву */}
          {title.slice(1)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
