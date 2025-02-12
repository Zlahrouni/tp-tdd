import { describe, expect, test } from "vitest";
import { solveNQueenAtack } from "./nQueenAttack";

describe("nQueen Attack test", () => {
    test("it should throw error : n should'nt be negative", () => {
        expect(() => solveNQueenAtack(-2)).toThrow("n should'nt be negative")
    });

    test("should return empty array for n = 0", () => {
        expect(solveNQueenAtack(0)).toEqual([[]])
    })

    test("should return empty array for n = 1 & 3", () => {
        expect(solveNQueenAtack(1)).toEqual([[]]);
        expect(solveNQueenAtack(3)).toEqual([[]]);
    });
})