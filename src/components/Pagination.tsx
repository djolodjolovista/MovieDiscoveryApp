import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  elementsPerPage: number;
  totalElements: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({ elementsPerPage, totalElements, paginate, currentPage }: PaginationProps) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <MainContainer>
      <ChangePage
        onClick={() => {
          currentPage > 1 && paginate(currentPage - 1);
        }}>
        {'<'}
      </ChangePage>
      <CurrentPage>{currentPage}</CurrentPage>
      <ChangePage
        onClick={() => {
          currentPage < pageNumbers.length && paginate(currentPage + 1);
        }}>
        {'>'}
      </ChangePage>
      <TotalPages>{pageNumbers.length}</TotalPages>
    </MainContainer>
  );
};

export default Pagination;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const TotalPages = styled.span`
  margin-left: 10px;
  text-decoration: none;
  border: 1.2px solid black;
  border-radius: 5px;
  padding: 1px 10px;
  padding-bottom: 3px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const CurrentPage = styled(TotalPages)`
  margin: 0px;
`;

const ChangePage = styled(TotalPages)`
  margin-left: 3px;
  margin-right: 3px;
  &:hover {
    color: rgb(5 110 5);
    font-weight: bold;
    border: 1.2px solid black;
    background-color: rgb(80 231 80);
  }
`;
