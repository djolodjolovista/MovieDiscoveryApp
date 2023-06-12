import React, { Dispatch, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import SearchMovieCard from './SearchMovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Movie } from '../features/moviesSlice';

interface SearchSuggestionBoxProps {
  movies: Movie[];
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

const SearchSuggestionBox = ({ movies, totalPages, setPage, page }: SearchSuggestionBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    setPage((page) => page + 1);
    ref.current!.scrollTop = 0;
  };
  return (
    <Container ref={ref} id="scrollbarContainer">
      <InfiniteScroll
        dataLength={totalPages}
        next={handleScroll}
        hasMore={page < totalPages}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollbarContainer"
        scrollThreshold={1}
        endMessage={<EndMessage>Yay! You have seen it all</EndMessage>}>
        {movies.map((movie: Movie, index) => (
          <SearchMovieCard key={index} movie={movie} />
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default SearchSuggestionBox;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  width: 40%;
  background: rgb(4, 170, 109);
  top: 50px;
  overflow: auto;
  max-height: 500px;
  padding-bottom: 50px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: green;
  }
`;

const EndMessage = styled.p`
  text-align: center;
  font-weight: bold;
  color: white;
`;
