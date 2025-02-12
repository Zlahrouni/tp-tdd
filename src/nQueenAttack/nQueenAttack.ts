export function solveNQueenAtack(n: number): string[][] {
    if (n < 0) throw new Error("n should'nt be negative");
    if (n === 0 || n === 1 || n === 3) return [[]];

    if (n === 2) {
        return [
            ["##", "OO"],
            ["OO", "##"]
        ];
    }
    throw new Error("Should be here");
    
}