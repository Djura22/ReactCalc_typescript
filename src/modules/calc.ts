/**
 * Calculator Process:
 * Input: --> [UserInput, Userinput, ...]
 * Generate: --> { state }
 */

export enum InputType {
  Number,
  Operator,
  Memory
};

export enum OpType {
  Add = 'add',
  Subtract = 'subtract',
  Equals = 'equals'
};

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
};

type OpsBuilder = {
  operations: Operation[];
  working: Operation;
};

const getOperationsBuilder = (inputs: Array<CalcInput>): OpsBuilder => {
  return inputs.reduce<OpsBuilder>((builder, input) => {
    switch(input.type) {
      case InputType.Number:
        const prevValue = builder.working?.value || 0;
        const newValue = prevValue * 10 + input.value;
        return {...builder, working: { ...builder.working, value: newValue}};

      case InputType.Operator:
        if (input.operator === OpType.Equals) {
          return {
            operations: [...builder.operations, builder.working,
              {operator: OpType.Equals, value: 0}
            ], 
            working: {operator: OpType.Add, value: 0}
          };
        } else {
          return {
            operations: [...builder.operations, builder.working], 
            working: {operator: input.operator, value: 0}
          };
        }

    }
  }, 
  {
    operations: [],
    working: {operator: OpType.Add, value: 0},
  }
  );
};

const getTotal = (operations: Array<Operation>): number =>
  operations.reduce<number>((sum, operation) => {
    switch(operation.operator) {
      case OpType.Add:
        return sum + operation.value;
      case OpType.Subtract:
        return sum - operation.value;
      case OpType.Equals:
        return sum;
    }
  }, 0);

const getState = (inputs: Array<CalcInput>): CalcState => {
  const builder = getOperationsBuilder(inputs);
  const {operations} = builder;
  const lastOperation = operations.length ? operations[operations.length -1] : null;
  if (!lastOperation) return {displayValue: builder.working.value};

  const lastInput = inputs.length ? inputs[inputs.length - 1] : null;
  const total = getTotal(operations);

  switch(lastOperation.operator) {
    case OpType.Equals:
      return {displayValue: total};
    
    default:
      return {
        displayValue:
        lastInput && lastInput.type === InputType.Number
        ? builder.working.value : total
      };
  }
};

const Calc = {
  getOperationsBuilder,
  getState
};

export default Calc;