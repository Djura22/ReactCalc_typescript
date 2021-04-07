import Calc, { CalcInput, InputType, OpType } from './calc'

test('state', () => {
  const inputs: Array<CalcInput> = [
    {type: InputType.Number, value: 7},
    {type: InputType.Number, value: 5},
    {type: InputType.Operation, operation: OpType.Add},
    {type: InputType.Number, value: 2},
    {type: InputType.Number, value: 5},
    {type: InputType.Operation, operation: OpType.Equals},
  ]
  const state = Calc.getState(inputs);
  expect(state.displayValue).toEqual(100);

})