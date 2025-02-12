import { describe, expect, test } from "vitest";
import { solveNQueen } from "./nQueen";

describe("nQeen", () => {
    test("should throw error because n is negative", () => {
       expect(() => solveNQueen(-1)).toThrow("N should'nt be negative");
    })

    test("should return empty array for n = 0", () => {
        expect(solveNQueen(0)).toEqual([[]])
    })

    test("should return just one queen and one case", () => {
        expect(solveNQueen(1)).toEqual([['#']])
    })

    test("should return empty array for n = 2 or 3 (no solution possible)", () => {
        expect(solveNQueen(2)).toEqual([[]])
        expect(solveNQueen(3)).toEqual([[]])
    })

    test("should return correct solutions for n = 4", () => {
        const solutions = solveNQueen(4);
        const expected = [
            ["OO#O", "#OOO", "OOO#", "O#OO"],
            ["O#OO", "OOO#", "#OOO", "OO#O"]
        ];

        expect(solutions).toHaveLength(2);
        
        expect(solutions).toEqual(
            expect.arrayContaining([
                expect.arrayContaining(expected[0]),
                expect.arrayContaining(expected[1])
            ])
        );
    })

    test("should find correct number of solutions for n = 5", () => {
        const solutions = solveNQueen(5);
        expect(solutions).toHaveLength(10);
    })

    test("should have exactly 5 queens for each solution of n = 5", () => {
        const solutions = solveNQueen(5);
        solutions.forEach(solution => {
            const queenCount = solution.join('').split('#').length - 1;
            expect(queenCount).toBe(5);
        });
    })
})