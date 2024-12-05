import React from 'react';
import { Stack, Container } from '@mui/material';
import { AccordionArticle } from './AccordionArticle';

interface ArticleListProps {
  isDarkMode: boolean; // пропс для темы 
}

export const ArticleList: React.FC<ArticleListProps> = ({ isDarkMode }) => {
  const articles = [
    { title: 'Чемпионы добрых дел.', content: 'Страна отмечает День добровольца. Как развивает корпоративное волонтерство «Русал»' },
    { title: 'Тефлон, канцерогены, микропластик.', content: 'Ученый-диетолог развенчивает популярные страхи вокруг еды' },
    { title: 'Прима ХХ века.', content: 'Как Галина Уланова прославила советский балет и влюбила в себя всю планету?' },
    { title: 'Сериал «Враг у ворот».', content: 'Каким вышел российский триллер про войну и советскую милицию?' },
  ];

  return (
    <Container sx={{ width: '80%' }}> 
      <Stack spacing={3}>
        {articles.map((article, index) => (
          <AccordionArticle
            key={index}
            title={article.title}
            content={article.content}
            isOdd={ !(index % 2 )}   // четность
            isDarkMode={isDarkMode}  // тема
          />
        ))}
      </Stack>
    </Container>
  );
};
