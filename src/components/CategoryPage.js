import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import CatHeader from './CategoryPageHeader';
import Hr from './styled/Hr';
import Layout from './Layout';
import QuestionCard from './QuestionCard';

const CategoryPage = (props) => {
  const categories = props.categories.map((c, i) => (
    <CategoryCard key={i} card={c} />
  ))
  return (
    <Layout>
      <Sections>
        <CatHeader
          title={props.title}
          subtitle={props.subtitle}
          path={props.path}
        />
        <Categories>{categories}</Categories>
        <Hr style={{marginBottom: 35}}/>
        <QuestionCard />
        <Hr style={{marginBottom: 35}}/>
      </Sections>
    </Layout>
  );
};
export default CategoryPage;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 37px;
  > div {
    margin-bottom: 35px;
  }
  > div:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    width: 734px;
    > div {
      margin-bottom: 0;
    }
    > div:nth-child(-n + 2) {
      margin-bottom: 30px;
    }
    > div:nth-child(odd) {
      margin-right: 26px;
    }
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    width: 1046px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    > div:nth-child(odd) {
      margin-right: 40px;
    }
    > div:nth-child(-n + 2) {
      margin-bottom: 40px;
    }
  }
`