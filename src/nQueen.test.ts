import { describe, expect, test } from "vitest";
import { solveNQueen } from "./nQueen";

describe("nQeen", () => {
    // RED
    test("should throw error because n is negative", () => {
       expect(() => solveNQueen(-1)).toThrow("N should'nt be negative");
    })
})