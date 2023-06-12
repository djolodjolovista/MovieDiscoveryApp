import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { Movie } from '../features/moviesSlice';

interface PopularMoviesCatalogProps {
  movies: Movie[];
}

const ListContainer = styled.div`
  overflow-x: auto;
`;

const PopularMoviesCatalog: React.FC<PopularMoviesCatalogProps> = ({ movies }) => {
  return (
    <ListContainer>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}{' '}
    </ListContainer>
  );
};

export default PopularMoviesCatalog;
