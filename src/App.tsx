import React from 'react';
import styled from 'styled-components';
import Calculator from './components/Calculator';

const Container = styled.div`
  align-items: center;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
 
`;

function App() {
  return (
    <Container>
    <Calculator></Calculator>
    </Container>
  )
};

export default App;
