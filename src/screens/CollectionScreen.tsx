import React from 'react';
import styled from 'styled-components';
import { useDeleteFavoriteMovieMutation, useGetFavoritesMoviesQuery } from '../services/movieApi';
import Catalog from '../components/Catalog';
import { toast } from 'react-hot-toast';

const CollectionScreen = () => {
  const { data: favoriteMovies } = useGetFavoritesMoviesQuery();
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
      <Catalog
        cardButtonText="Delete"
        deleteOrSaveHandle={handleDeleteFavoriteMovie}
        movies={favoriteMovies?.results}
      />
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
