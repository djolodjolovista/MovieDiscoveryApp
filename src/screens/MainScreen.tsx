import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Catalog from '../components/Catalog';
import { useGetPopularMoviesQuery } from '../services/movieApi';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changeCurrentPage } from '../features/moviesSlice';

const MainScreen = () => {
  const genre_id = useAppSelector((state) => state.movies.genres);
  const currentPage = useAppSelector((state) => state.movies.currentPage);
  const dispatch = useAppDispatch();
  const { data } = useGetPopularMoviesQuery({ page: currentPage, genre_id });
  //const { data: data1 } = useGetGenresQuery('test');
  //const { data: data2 } = useGetMoviesByGenreQuery(27);
  console.log('test->>>', data);
  console.log('Genres->>>>', currentPage);
  //console.log('moviesgenre->>>>', data2);

  const paginate = (pageNumber: number) => dispatch(changeCurrentPage(pageNumber));
  return (
    <Container>
      <Title>Popular Movies</Title>
      <Catalog movies={data?.results} />
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          elementsPerPage={20}
          totalElements={data?.total_results}
          paginate={paginate}
        />
      </PaginationContainer>
    </Container>
  );
};

export default MainScreen;

const Container = styled.div``;
const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h1``;
