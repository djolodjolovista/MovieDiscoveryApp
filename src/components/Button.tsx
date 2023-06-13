import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  text: string;
  hoverMessage?: string;
}

const Button = ({ onClick, text, hoverMessage }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} title={hoverMessage}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  max-width: 110px;
  &:hover {
    background-color: rgb(80 231 80);
  }
`;
