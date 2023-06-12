import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';
import Filter, { FilterOption } from './Filter';
import { useGetMoviesMutation } from '../services/movieApi';
import { useLocation } from 'react-router-dom';
import SearchSuggestionBox from './SearchSuggestionBox';

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [getMovies, { data }] = useGetMoviesMutation();
  const location = useLocation();

  const options: FilterOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  console.log('Data->>>>>', data);
  console.log('Page->>>>', page);

  useEffect(() => {
    if (query && page) {
      fetchMovie();
    }
  }, [query, page]);

  const fetchMovie = async () => {
    await getMovies({ query, page });
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
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
            <InputSearch type="text" placeholder="Search..." onChange={handleSearchChange} />
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
            options={options}
            selectedOption={selectedOption}
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
  width: 100%;
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
