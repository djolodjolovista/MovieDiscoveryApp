import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Movie } from '../features/moviesSlice';
import Button from './Button';
import { useAddFavoriteMovieMutation } from '../services/movieApi';
import { toast } from 'react-hot-toast';

interface MovieCardProps {
  movie: Movie;
}

const SearchMovieCard = ({ movie }: MovieCardProps) => {
  const [addFavoriteMovie] = useAddFavoriteMovieMutation();
  const addFavoriteMovieHandle = async (movie_id: number) => {
    await addFavoriteMovie(movie_id)
      .unwrap()
      .then(() => toast.success('Movie saved!'))
      .catch((error) =>
        toast.error(`Status: ${error?.status}\n Message: ${error?.data?.status_message}`)
      );
  };
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
            onClick={() => addFavoriteMovieHandle(movie.id)}
            text="Save"
            hoverMessage="Save to collection"
          />
        </ButtonContainer>
      </TextContainer>
    </CardContainer>
  );
};

export default SearchMovieCard;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7px;
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
