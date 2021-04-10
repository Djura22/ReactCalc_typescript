import React, {useState} from 'react';
import styled from 'styled-components';
import Calc, {CalcInput, InputType, OpType} from '../modules/calc';
import Button, {ButtonType} from './Button';

const Container = styled.div`

`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
  justify-items: flex-end;
  background: #fff;
  border-radius: 8px;
  font-size: 48px;
  grid-column-end: span 4;
  padding: 30px 24px;
  text-align: right;
`;

const Calculator: React.FC<{}> = () => {

  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);

  const appendInput = (input: CalcInput): void => {
    setInputs(prev => [...prev, input]);
  };

  const handleAC = () => {setInputs([])};

  const handleNumber = (value: number) => () =>
    appendInput({type: InputType.Number, value});

  const handleOperator = (operator: OpType) => () =>
    appendInput({type: InputType.Operator, operator});

  return (
    <Container>
      <Grid>
        <Display>{state.displayValue}</Display>
        <Button label="AC" position={[0, 1]} width={2} onClick={handleAC} />
        <Button label="DEL" position={[2, 1]} width={2} />
        <Button label="+" position={[3, 2]} onClick={handleOperator(OpType.Add)} />
        <Button label="-" position={[3, 3]} onClick={handleOperator(OpType.Subtract)} />
        <Button label="=" position={[3, 4]} height={2} onClick={handleOperator(OpType.Equals)} />
        <Button buttonType={ButtonType.Number} label="9" position={[2, 2]} onClick={handleNumber(9)}/>
        <Button buttonType={ButtonType.Number} label="8" position={[1, 2]} onClick={handleNumber(8)}/>
        <Button buttonType={ButtonType.Number} label="7" position={[0, 2]} onClick={handleNumber(7)}/>
        <Button buttonType={ButtonType.Number} label="6" position={[2, 3]} onClick={handleNumber(6)}/>
        <Button buttonType={ButtonType.Number} label="5" position={[1, 3]} onClick={handleNumber(5)}/>
        <Button buttonType={ButtonType.Number} label="4" position={[0, 3]} onClick={handleNumber(4)}/>
        <Button buttonType={ButtonType.Number} label="3" position={[2, 4]} onClick={handleNumber(3)}/>
        <Button buttonType={ButtonType.Number} label="2" position={[1, 4]} onClick={handleNumber(2)}/>
        <Button buttonType={ButtonType.Number} label="1" position={[0, 4]} onClick={handleNumber(1)}/>
        <Button buttonType={ButtonType.Number} label="0" position={[0, 5]} width={3} onClick={handleNumber(0)}/>
      </Grid>
    </Container>
  );  
}

export default Calculator;