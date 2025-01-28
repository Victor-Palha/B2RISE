export class InvalidOperationError extends Error {
    constructor(operator: string, a: number, b: number) {
        super(`Error: Invalid operation while trying to "${operator}" ${a} by ${b}.`);
    }
}