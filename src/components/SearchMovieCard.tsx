import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useAppDispatch } from '../app/hooks';
import { Movie, addMovieToCollection } from '../features/moviesSlice';
import Button from './Button';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  return (
    <CardContainer>
      <Poster
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        width={100}
        height={150}
      />
      <TextContainer>
        <Title>{movie.title}</Title>
        <ReleaseYear>Released in {moment(movie.release_date).format('yyyy')}</ReleaseYear>
        <ButtonContainer>
          <Button
            onClick={() => dispatch(addMovieToCollection(movie))}
            text="Save"
            hoverMessage="Save to collection"
          />
        </ButtonContainer>
      </TextContainer>
    </CardContainer>
  );
};

export default MovieCard;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  width: 100%;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  border: 1.5px solid rgb(0 98 62);
  border-radius: 4px;
  box-shadow: black 2px 2px 8px 2px;
  padding: 10px;
  margin: 8px 5%;
  display: flex;
  background: rgb(4, 170, 109);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const ReleaseYear = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: white;
`;

const Poster = styled.img`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 2px 2px;
`;
