import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Movie } from '../features/moviesSlice';
import Button from './Button';

interface MovieCardProps {
  movie: Movie;
  onClickHandle?: (id_movie: number) => void;
  buttonText?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClickHandle, buttonText }) => {
  return (
    <CardContainer>
      <Poster
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        width={170}
        height={210}
      />
      <TextContainer>
        <Title>{movie.title}</Title>
        <ReleaseYear>Released in {moment(movie.release_date).format('yyyy')}</ReleaseYear>
      </TextContainer>
      {onClickHandle && (
        <Button
          onClick={() => onClickHandle(movie.id)}
          text={buttonText ? buttonText : 'Details'}
          hoverMessage="Show details"
        />
      )}
    </CardContainer>
  );
};

export default MovieCard;

const CardContainer = styled.div`
  width: 170px;
  border: 0.5px solid white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5px;
  background: black;
  box-shadow: white 0px 0px 10px 1px;
  color: white;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  height: 2.5rem;
  text-align: center;
  margin-top: 3px;
  margin-bottom: 0px;
`;

const ReleaseYear = styled.p`
  margin: 8px 0;
  font-size: 14px;
`;

const Poster = styled.img`
  border-radius: 4px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
