/**
 * Calculator Process:
 * Input: --> [UserInput, Userinput, ...]
 * Generate: --> { state }
 */

export enum InputType {
  Number,
  Operation
}

export enum OpType {
  Add,
  Subtract,
  Equals
}

export type CalcInput = 
  | {type: InputType.Number, value: number}
  | {type: InputType.Operation; operation: OpType };

export type CalcState = {
  displayValue: number;
};

const getState = (inputs: Array<CalcInput>): CalcState => {
  return { displayValue: 0}
}

const Calc = {
  getState
}

export default Calc;