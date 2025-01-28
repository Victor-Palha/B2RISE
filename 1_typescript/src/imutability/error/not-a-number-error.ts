export class NotANumberError extends Error {
    constructor(value: any) {
        super(`Error: Expected a number but got ${typeof value}`);
    }
}