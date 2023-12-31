import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

export interface Genres {
  id: number;
  name: string;
}

export interface FilterComponentProps {
  options: Genres[] | undefined;
  selectedOption: number | undefined;
  onOptionChange: (value: number | undefined) => void;
}

const Filter = ({ options, selectedOption, onOptionChange }: FilterComponentProps) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(parseInt(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="genres">Filter:</FilterLabel>
      <FilterSelect id="genres" value={selectedOption} onChange={handleSelectChange}>
        <FilterOption value={undefined}>-- Please choose genre --</FilterOption>
        {options &&
          options.map((option) => (
            <FilterOption key={option.id} value={option.id}>
              {option.name}
            </FilterOption>
          ))}
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px;
`;

const FilterLabel = styled.label`
  margin-right: 8px;
  color: white;
`;
const FilterOption = styled.option`
  background-color: rgba(4, 170, 109, 1);
  &:hover {
    background-color: rgb(4 170 109 / 47%);
  }
`;

const FilterSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  background: rgba(4, 170, 109, 1);
  color: white;
  &:hover {
    cursor: pointer;
    background: rgb(0 255 161);
  }
`;
