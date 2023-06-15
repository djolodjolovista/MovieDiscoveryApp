import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

export interface FilterOption {
  id: number;
  name: string;
}

interface FilterComponentProps {
  options: FilterOption[];
  selectedOption: number;
  onOptionChange: (value: number) => void;
}

const Filter: React.FC<FilterComponentProps> = ({ options, selectedOption, onOptionChange }) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(parseInt(event.target.value));
  };
  return (
    <FilterContainer>
      <FilterLabel>Filter:</FilterLabel>
      <FilterSelect value={selectedOption} onChange={handleSelectChange}>
        <FilterOption value={undefined}>--Please choose an option--</FilterOption>
        {options?.map((option) => (
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

const FilterSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
`;

const FilterOption = styled.option``;
