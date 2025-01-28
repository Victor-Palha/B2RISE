import { describe, expect, it } from "vitest";
import { calculate } from "./calculate";

describe("calculate function", () => {

    it("should be able to use add operator", () => {
        const result = calculate("divide", 10, 2);
        expect(result).toBe(5);
    });

    it("should be able to use subtract operator", () => {
        const result = calculate("subtract", 10, 2);
        expect(result).toBe(8);
    });

    it("should be able to use multiply operator", () => {
        const result = calculate("multiply", 10, 2);
        expect(result).toBe(20);
    });

    it("should be able to use add operator", () => {
        const result = calculate("add", 10, 2);
        expect(result).toBe(12);
    });

    it("should be able to use pot operator", () => {
        const result = calculate("pow", 2, 3);
        expect(result).toBe(8);
    });

    it("should throw an error if the operation is invalid", () => {
        expect(() => calculate("invalid" as any, 10, 2)).toThrowError("Error: Invalid operation while trying to \"invalid\" 10 by 2.");
    });

    it("should throw an error if the result is infinity", () => {
        expect(() => calculate("divide", 10, 0)).toThrowError("Error: Invalid operation while trying to \"divide\" 10 by 0.");
    });
});