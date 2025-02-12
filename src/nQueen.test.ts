import { describe, expect, test } from "vitest";
import { solveNQueen } from "./nQueen";

describe("nQeen", () => {
    test("should throw error because n is negative", () => {
       expect(() => solveNQueen(-1)).toThrow("N should'nt be negative");
    })

    test("should return empty array", () => {
        expect(solveNQueen(0)).toEqual([])
    })

    test("should return just one queen and one case", () => {
        expect(solveNQueen(1)).toEqual(['#'])
    })

    test("should return empty array (no solution possible)", () => {
        expect(solveNQueen(2)).toEqual([])
    })
})