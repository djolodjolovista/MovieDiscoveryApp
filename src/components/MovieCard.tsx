import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Movie } from '../features/moviesSlice';

interface MovieCardProps {
  movie: Movie;
  onClickHandle?: (id_movie: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClickHandle }) => {
  return (
    <CardContainer>
      <Poster
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        width={150}
        height={200}
      />
      <Title>{movie.title}</Title>
      <ReleaseYear>Released in {moment(movie.release_date).format('yyyy')}</ReleaseYear>
      {onClickHandle && <button onClick={() => onClickHandle(movie.id)}>Details</button>}
    </CardContainer>
  );
};

export default MovieCard;

const CardContainer = styled.div`
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const ReleaseYear = styled.p`
  margin: 8px 0;
  font-size: 14px;
`;

const Poster = styled.img`
  border-radius: 4px;
  margin-top: 16px;
`;
