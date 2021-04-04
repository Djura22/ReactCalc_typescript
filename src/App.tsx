import React from 'react';
import styled from 'styled-components';
import Calculator from './components/Calculator';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
 
`;

function App() {
  return (
    <Container>
    <Calculator></Calculator>
    </Container>
  )
};

export default App;
