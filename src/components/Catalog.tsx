import React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import { Movie } from '../features/moviesSlice';

interface CatalogProps {
  movies: Movie[];
  movieDetailsClick?: (id_movie: number) => void;
}

const Catalog = ({ movies, movieDetailsClick }: CatalogProps) => {
  return (
    <div>
      <Grid>
        {movies &&
          movies.map((movie, index) => (
            <MovieCard onClickHandle={movieDetailsClick} key={index} movie={movie} />
          ))}
      </Grid>
    </div>
  );
};

export default Catalog;

const Grid = styled.div`
  display: grid;
  gap: 32px 16px;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-auto-rows: 1fr;
  justify-content: space-between;
  margin-right: 15px;
  margin-left: 15px;
`;
