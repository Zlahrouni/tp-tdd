import { describe, expect, test } from "vitest";
import { solveNQueenAtack } from "./nQueenAttack";

describe("nQueen Attack test", () => {
    test("it should throw error : n should'nt be negative", () => {
        expect(() => solveNQueenAtack(-2)).toThrow("n should'nt be negative")
    });
})