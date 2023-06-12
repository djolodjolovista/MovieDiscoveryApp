import React from 'react';
import styled from 'styled-components';
import Catalog from '../components/Catalog';
import { useGetPopularMoviesQuery } from '../services/movieApi';

const MainScreen = () => {
  const { data } = useGetPopularMoviesQuery(1);
  console.log('test->>>', data);
  return (
    <Container>
      Popular Movies
      <Catalog movies={data?.results} />
    </Container>
  );
};

export default MainScreen;

const Container = styled.div``;
