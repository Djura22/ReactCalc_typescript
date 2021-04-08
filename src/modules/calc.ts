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
  Add = 'add',
  Subtract = 'subtract',
  Equals = 'equals'
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
  operations: Operation[];
  working: Operation;
}

const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
  const builder = inputs.reduce<OpsBuilder>((builder, input) => {

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
  } as OpsBuilder
  );
  return builder.operations;
}; 

const getState = (inputs: Array<CalcInput>): CalcState => {
  return { displayValue: 0}
}

const Calc = {
  getOperations,
  getState
}

export default Calc;