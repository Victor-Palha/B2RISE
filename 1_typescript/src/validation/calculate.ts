import { InvalidOperationError } from "./error/Invalid-operation-error";

enum Operators {
    add,
    subtract,
    multiply,
    divide,
    pow
}
/**
 * Performs a mathematical operation between two numbers based on the given operator.
 *
 * @param {keyof typeof Operators} operator - The mathematical operator to apply. 
 *        Supported operators are:
 *        - "add": Addition (a + b)
 *        - "subtract": Subtraction (a - b)
 *        - "multiply": Multiplication (a * b)
 *        - "divide": Division (a / b)
 *        - "pot": Power (a ** b)
 * @param {number} a - The first operand in the operation.
 * @param {number} b - The second operand in the operation.
 * @returns {number} - The result of the operation.
 * 
 * @throws {InvalidOperationError} If:
 *         - The operator is invalid.
 *         - The result is `NaN` or not finite (e.g., division by zero).
 * 
 * @example
 * // Addition
 * calculate("add", 5, 3); // Returns: 8
 * 
 * @example
 * // Invalid Operator
 * try {
 *   calculate("mod", 10, 3); // Throws: InvalidOperationError
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
export function calculate(operator: keyof typeof Operators, a: number, b: number): number{
    let result: number;
    switch(operator){
        case "add": 
            result = a + b;
            break
        case "subtract": 
            result = a - b;
            break
        case "multiply": 
            result = a * b;
            break
        case "divide": 
            result = a / b;
            break
        case "pow":
            result = a ** b;
            break
        default:
            throw new InvalidOperationError(operator, a, b);
    }
    if(Number.isNaN(result) || !Number.isFinite(result)) {
        throw new InvalidOperationError(operator, a, b);
    };
    return result;
}