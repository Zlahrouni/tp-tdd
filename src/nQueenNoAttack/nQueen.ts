type Board = string[][];

export function solveNQueen(n: number): string[][] {
    const solutions: string[][] = []
    if (n < 0) throw new Error("N should'nt be negative");
    if (n === 0) return [[]];
    if (n === 1) return [['#']];
    if (n < 4) return [[]];

    // create a board
    const board: Board = Array(n).fill(null).map(() => Array(n).fill('O'));
    console.log(`board ${n} : \n`, board);
    
    function isPositionSafe(row: number, col: number): boolean {
        // Check left row
        for (let j = 0; j < col; j++) {
            if (board[row][j] === '#') return false;
        }

        // Check up-left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === '#') return false;
        }

        // Check down-left diagonal
        for (let i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] === '#') return false;
        }

        return true;
    }

    function solve(col: number) {
        if (col >= n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }

        for (let row = 0; row < n; row++) {
            if (isPositionSafe(row, col)) {
                board[row][col] = '#';
                solve(col + 1);
                board[row][col] = 'O';
            }
        }
    }

    solve(0); 
    console.log('Solutions :', solutions);
    
    return solutions;
}