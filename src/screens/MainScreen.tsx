import React from 'react';
import styled from 'styled-components';
import Catalog from '../components/Catalog';
import {
  useAddFavoriteMovieMutation,
  useGetMovieDetailsQuery,
  useGetPopularMoviesQuery
} from '../services/movieApi';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changeCurrentPage, openModal } from '../features/moviesSlice';
import DetailsMovieCard from '../components/DetailsMovieCard';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { toast } from 'react-hot-toast';
import HashLoader from 'react-spinners/HashLoader';

const MainScreen = () => {
  const genre_id = useAppSelector((state) => state.movies.genres);
  const currentPage = useAppSelector((state) => state.movies.currentPage);
  const modalId = useAppSelector((state) => state.movies.modalId);
  const dispatch = useAppDispatch();
  const { data: popularMovies, isLoading } = useGetPopularMoviesQuery({
    page: currentPage,
    genre_id
  });
  const [addFavoriteMovie, { isLoading: saveLoading }] = useAddFavoriteMovieMutation();
  const { data: movieDetails } = useGetMovieDetailsQuery(modalId ? modalId : skipToken);

  const handleCloseModal = () => {
    dispatch(openModal(null));
  };

  const movieDetailsClick = (id_movie: number) => {
    dispatch(openModal(id_movie));
  };

  const addFavoriteMovieHandle = async (movie_id: number) => {
    await addFavoriteMovie(movie_id)
      .unwrap()
      .then(() => toast.success('Movie saved!'))
      .catch((error) =>
        toast.error(`Status: ${error?.status}\n Message: ${error?.data?.status_message}`)
      );
    handleCloseModal();
  };

  const paginate = (pageNumber: number) => dispatch(changeCurrentPage(pageNumber));

  return (
    <Container>
      <Title>Popular Movies</Title>
      {isLoading ? (
        <SpinnerContainer>
          <HashLoader size={150} loading={true} color="#04AA6D" />
        </SpinnerContainer>
      ) : (
        <>
          <Catalog
            deleteOrSaveHandle={addFavoriteMovieHandle}
            detailsHandle={movieDetailsClick}
            movies={popularMovies?.results}
          />
          <PaginationContainer>
            <Pagination
              currentPage={currentPage}
              elementsPerPage={popularMovies?.results.length}
              totalElements={popularMovies?.total_results}
              paginate={paginate}
            />
          </PaginationContainer>
        </>
      )}
      {modalId && movieDetails && (
        <DetailsMovieCard
          save={addFavoriteMovieHandle}
          movie={movieDetails}
          closeModal={handleCloseModal}
          loading={saveLoading}
        />
      )}
    </Container>
  );
};

export default MainScreen;

const Container = styled.div`
  position: relative;
`;

const SpinnerContainer = styled.div`
  margin-top: 80px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
`;
const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  padding: 20px 0px 20px 15px;
`;
