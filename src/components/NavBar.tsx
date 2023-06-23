import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';
import Filter from './Filter';
import { useGetGenresQuery, useGetMoviesMutation } from '../services/movieApi';
import { useLocation } from 'react-router-dom';
import SearchSuggestionBox from './SearchSuggestionBox';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addFilter } from '../features/moviesSlice';

const NavBar = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [getMovies, { data }] = useGetMoviesMutation();
  const { data: genresData } = useGetGenresQuery();
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.movies.genres);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query && page) {
        fetchMovie();
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query, page]);

  const fetchMovie = async () => {
    await getMovies({ query, page });
  };

  const handleOptionChange = (value: number | undefined) => {
    dispatch(addFilter(value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <Container>
      <LinkContainers>
        <Link to="/movies">Movies</Link>
        <Link to="/collection">Collection</Link>
      </LinkContainers>
      {location.pathname !== '/collection' && (
        <>
          <SearchContainer>
            <InputSearch
              type="text"
              placeholder="Search for movie..."
              value={query}
              onChange={handleSearchChange}
            />
            {query && data?.results && (
              <SearchSuggestionBox
                movies={data.results}
                totalPages={data.total_pages}
                setPage={setPage}
                page={page}
              />
            )}
          </SearchContainer>
          <Filter
            options={genresData?.genres}
            selectedOption={currentGenre}
            onOptionChange={handleOptionChange}
          />
        </>
      )}
    </Container>
  );
};

export default NavBar;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

const LinkContainers = styled.div`
  display: flex;
`;

const InputSearch = styled.input`
  padding: 6px;
  font-size: 17px;
  border: none;
  border-radius: 3px;
  background: rgba(4, 170, 109, 1);
  color: white;
  width: 100%;
  &:hover {
    background: rgb(0 255 161);
  }
  &::placeholder {
    color: white;
  }
`;

const Link = styled(BaseNavLink)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  &.active {
    background-color: #04aa6d;
    color: white;
  }
`;

const Container = styled.div`
  background-color: #333;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
