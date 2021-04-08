/**
 * Calculator Process:
 * Input: --> [UserInput, Userinput, ...]
 * Generate: --> { state }
 */

export enum InputType {
  Number,
  Operator
}

export enum OpType {
  Add,
  Subtract,
  Equals
}

export type CalcInput = 
  | {type: InputType.Number, value: number}
  | {type: InputType.Operator; operator: OpType};

export type CalcState = {
  displayValue: number;
};

/**
 * Input [7, 5, +, 2, 5, =]
 * Output [{+ 75}, {+ 25}, {=}]
 * ------  Op Val  Op Val  Op
 */

export type Operation = {
  operator: OpType;
  value: number;
}

type OpsBuilder = {
  operations: Operation[]
  working: Omit<Operation, 'operator'> | null;
}

const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
  const builder = inputs.reduce<OpsBuilder>((builder, input) => {

    switch(input.type) {
      case InputType.Number:
        const prevValue = builder.working?.value || 0;
        const newValue = prevValue * 10 + input.value;
        return {...builder, working: {value: newValue}};
    }

  }, {operations: [], working: null} as OpsBuilder);
}  

const getState = (inputs: Array<CalcInput>): CalcState => {
  const result = inputs.reduce();
  
  return { displayValue: 0}
}

const Calc = {
  getState
}

export default Calc;