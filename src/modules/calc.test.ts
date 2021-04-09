import Calc, { CalcInput, InputType, Operation, OpType } from './calc'

test('is generating operations', () => {
  const inputs: Array<CalcInput> = [
    {type: InputType.Number, value: 7},
    {type: InputType.Number, value: 5},
    {type: InputType.Operator, operator: OpType.Add},
    {type: InputType.Number, value: 2},
    {type: InputType.Number, value: 5},
    {type: InputType.Operator, operator: OpType.Equals},
  ];

  const operations: Array<Operation> = [
    {operator: OpType.Add, value: 75},
    {operator: OpType.Add, value: 25},
    {operator: OpType.Equals, value: 0}
  ]

  expect(Calc.getOperationsBuilder(inputs).operations).toEqual(operations);

});

test('displayValue is 0 when no inputs', () => {
  const inputs: Array<CalcInput> = []

  const state = Calc.getState(inputs);
  expect(state.displayValue).toEqual(0);

});

test('displayValue is read from first input', () => {
  const inputs: Array<CalcInput> = [
    {type: InputType.Number, value: 1}
  ];

  const state = Calc.getState(inputs);
  expect(state.displayValue).toEqual(1);
});

test('displayValue correct (addition and subtraction)', () => {
  const inputs: Array<CalcInput> = [
    {type: InputType.Number, value: 7},
    {type: InputType.Number, value: 5},
    {type: InputType.Operator, operator: OpType.Add},
    {type: InputType.Number, value: 2},
    {type: InputType.Operator, operator: OpType.Subtract},
    {type: InputType.Number, value: 5},
    {type: InputType.Operator, operator: OpType.Equals},
  ]

  const state = Calc.getState(inputs);
  expect(state.displayValue).toEqual(72);

});

test('displayValue correct after performing Addition', () => {
  const inputs: Array<CalcInput> = [
    {type: InputType.Number, value: 7},
    {type: InputType.Number, value: 5},
    {type: InputType.Operator, operator: OpType.Add},
    {type: InputType.Number, value: 2},
    {type: InputType.Number, value: 5},
    {type: InputType.Operator, operator: OpType.Equals},
  ]
  const state = Calc.getState(inputs);
  expect(state.displayValue).toEqual(100);

});