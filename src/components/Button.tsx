import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
}

const StyledButton = styled.button`
  background: #e48900;
  border: none;
  border-radius: 8px;
  font-size: 26px;
`;

const Button: React.FC<Props> = ( {label} ) => {
  return (
    <StyledButton>{label}</StyledButton>
  );

};

export default Button;