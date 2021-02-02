import React from 'react';
import styled from 'styled-components';
import ArticleList from './ArticlesList';
import { ArticleType } from '../../types';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;

  @media (max-width: 1439px) {
    padding: 0 15px;
  }

  @media (max-width: 960px) {
    max-width: 640px;
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
`;

const Title = styled.h1`
  font: 500 30px/32px Verdana, sans-serif;
  text-transform: uppercase;
  letter-spacing: .05em;
  margin: 20px 0;
`;

const BodyArticles = styled.div`

`;

interface ArticlePageProps {
  articles: ArticleType[];
  getIdForCatalogPage: (id: string) => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ articles, getIdForCatalogPage }) => {
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title>
            Журнал
          </Title>
        </HeaderContainer>
        <BodyArticles>
          <ArticleList articles={articles} setIdForCatalogPage={getIdForCatalogPage} />
        </BodyArticles>
      </Container>
    </Wrapper>
  );
};

export default ArticlePage;
