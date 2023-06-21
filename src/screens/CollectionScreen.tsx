import React from 'react';
import styled from 'styled-components';
import { useDeleteFavoriteMovieMutation, useGetFavoritesMoviesQuery } from '../services/movieApi';
import Catalog from '../components/Catalog';
import { toast } from 'react-hot-toast';
import HashLoader from 'react-spinners/HashLoader';

const CollectionScreen = () => {
  const { data: favoriteMovies, isLoading } = useGetFavoritesMoviesQuery();
  const [deleteFavoriteMovie] = useDeleteFavoriteMovieMutation();
  const handleDeleteFavoriteMovie = async (id: number) => {
    await deleteFavoriteMovie(id)
      .unwrap()
      .then(() => toast.success('Movie deleted!'))
      .catch(() => toast.error('Something went wrong!'));
  };
  return (
    <Container>
      <Title>Favorite Movies</Title>
      {isLoading ? (
        <SpinnerContainer>
          <HashLoader size={150} color="#04AA6D" />
        </SpinnerContainer>
      ) : (
        <Catalog
          cardButtonText="Delete"
          deleteOrSaveHandle={handleDeleteFavoriteMovie}
          movies={favoriteMovies?.results}
        />
      )}
    </Container>
  );
};

export default CollectionScreen;

const Container = styled.div``;

const Title = styled.h1`
  margin: 0;
  padding: 20px 0px 20px 15px;
  color: white;
`;

const SpinnerContainer = styled.div`
  margin-top: 80px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
`;
