type Board = string[][];

export function solveNQueen(n: number): string[] {
    if (n < 0) throw new Error("N should'nt be negative");
    if (n === 0) return [];
    if (n === 1) return ['#'];
    if (n === 2) return [];
    
    // create a board
    const board: Board = Array(n).fill(null).map(() => Array(n).fill('O'));
    console.log(`board ${n} : \n`, board);
    
    return [];
}