import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import moment from 'moment';
import HashLoader from 'react-spinners/HashLoader';
import { Genres } from './Filter';

export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  synopsis: string;
  genres: Genres[];
  runtime: number;
  vote_average: number;
  release_date: string;
  overview: string;
}

interface DetailsMovieCardProps {
  movie: MovieDetails;
  closeModal: () => void;
  save: (id_movie: number) => void;
  loading?: boolean;
}

const DetailsMovieCard = ({ movie, closeModal, save, loading = false }: DetailsMovieCardProps) => {
  const spinnerCss: React.CSSProperties = {
    top: '150px',
    position: 'absolute'
  };
  return (
    <MainContainer>
      <CardContainer>
        {loading && <HashLoader loading={true} size={120} color="green" cssOverride={spinnerCss} />}
        <MovieTitle>{movie.title}</MovieTitle>
        <Container>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
            alt={movie.title}
          />
          <TextDetailsContainer>
            <TextContainer>
              <Label>Genre:</Label>
              {movie.genres.map((el, index) => {
                return (index ? ', ' : '') + el.name;
              })}
            </TextContainer>
            <TextContainer>
              <Label>Runtime:</Label>
              {movie.runtime} minutes
            </TextContainer>
            <TextContainer>
              <Label>Rate:</Label>
              🌟{movie.vote_average.toFixed(2)}
            </TextContainer>
            <TextContainer>
              <Label>Release year:</Label>
              {moment(movie.release_date).format('yyyy')}
            </TextContainer>
          </TextDetailsContainer>
        </Container>
        <Synopsis>{movie.overview}</Synopsis>
        <ButtonsContainer>
          <Button onClick={() => save(movie.id)} text="Save" hoverMessage="Save to collection" />
          <Button onClick={closeModal} text="Close" hoverMessage="Close modal" />
        </ButtonsContainer>
      </CardContainer>
    </MainContainer>
  );
};

export default DetailsMovieCard;

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(4, 170, 109, 0.47);
  z-index: 2;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 50%;
  height: 65%;
  background: rgb(4, 170, 109);
  box-shadow: green 0px 3px 20px 1px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const MovieTitle = styled.h3`
  margin: 0px 0px 8px 0px;
`;

const MoviePoster = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5%;
  width: 100%;
`;

const TextDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Synopsis = styled.p`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TextContainer = styled.div``;

const Label = styled.span`
  font-weight: 700;
  font-size: 16px;
  font-style: italic;
  padding-right: 5px;
`;
