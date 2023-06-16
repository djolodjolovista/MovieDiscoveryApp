import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Catalog from '../components/Catalog';
import { useGetMovieDetailsQuery, useGetPopularMoviesQuery } from '../services/movieApi';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changeCurrentPage, openModal } from '../features/moviesSlice';
import DetailsMovieCard from '../components/DetailsMovieCard';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const MainScreen = () => {
  const genre_id = useAppSelector((state) => state.movies.genres);
  const currentPage = useAppSelector((state) => state.movies.currentPage);
  const modalId = useAppSelector((state) => state.movies.modalId);
  const dispatch = useAppDispatch();
  const { data } = useGetPopularMoviesQuery({ page: currentPage, genre_id });
  //const { data: data2 } = useGetMovieDetailsQuery(1107872); //movie details query
  //const { data: data1 } = useGetGenresQuery('test');
  //const { data: data2 } = useGetMoviesByGenreQuery(27);
  console.log('test->>>', data);
  console.log('Genres->>>>', currentPage);
  //console.log('moviesdetails->>>>', data2); //movie details

  const { data: movieDetails } = useGetMovieDetailsQuery(modalId ? modalId : skipToken);

  const handleCloseModal = () => {
    dispatch(openModal(null));
  };

  const movieDetailsClick = (id_movie: number) => {
    dispatch(openModal(id_movie));
  };

  const paginate = (pageNumber: number) => dispatch(changeCurrentPage(pageNumber));
  return (
    <Container>
      <Title>Popular Movies</Title>
      <Catalog movieDetailsClick={movieDetailsClick} movies={data?.results} />
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          elementsPerPage={20}
          totalElements={data?.total_results}
          paginate={paginate}
        />
      </PaginationContainer>
      {modalId && movieDetails && (
        <DetailsMovieCard movie={movieDetails} closeModal={handleCloseModal} />
      )}
    </Container>
  );
};

export default MainScreen;

const Container = styled.div`
  position: relative;
`;
const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 20px 0px 20px 0px;
`;
