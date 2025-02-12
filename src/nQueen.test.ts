import { describe, expect, test } from "vitest";
import { solveNQueen } from "./nQueen";

describe("nQeen", () => {
    test("should throw error because n is negative", () => {
       expect(() => solveNQueen(-1)).toThrow("N should'nt be negative");
    })

    test("should return empty array for n = 0", () => {
        expect(solveNQueen(0)).toEqual([])
    })

    test("should return just one queen and one case", () => {
        expect(solveNQueen(1)).toEqual(['#'])
    })

    test("should return empty array for n = 2 or 3 (no solution possible)", () => {
        expect(solveNQueen(2)).toEqual([])
        expect(solveNQueen(3)).toEqual([])
    })

    test("should return correct solutions for n = 4", () => {
        const solution = solveNQueen(4);
        expect(solution.length).toEqual(4)
    })
})