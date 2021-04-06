import React from 'react';
import styled from 'styled-components';
import Button, {ButtonType} from './Button';

const Container = styled.div`

`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(5, 80px);
`;

const Calculator: React.FC<{}> = () => {
  return (
    <Container>
      <Grid>
        <Button label="AC" position={[0, 0]} width={2} />
        <Button label="DEL" position={[2, 0]} width={2} />
        <Button label="+" position={[3, 1]} />
        <Button label="-" position={[3, 2]} />
        <Button label="=" position={[3, 3]} height={2} />
        <Button type={ButtonType.Number} label="9" position={[2, 1]} />
        <Button type={ButtonType.Number} label="8" position={[1, 1]} />
        <Button type={ButtonType.Number} label="7" position={[0, 1]} />
        <Button type={ButtonType.Number} label="6" position={[2, 2]} />
        <Button type={ButtonType.Number} label="5" position={[1, 2]} />
        <Button type={ButtonType.Number} label="4" position={[0, 2]} />
        <Button type={ButtonType.Number} label="3" position={[2, 3]} />
        <Button type={ButtonType.Number} label="2" position={[1, 3]} />
        <Button type={ButtonType.Number} label="1" position={[0, 3]} />
        <Button type={ButtonType.Number} label="0" position={[0, 4]} width={3} />
      </Grid>
    </Container>
  );  
}

export default Calculator;