function isWinner(grid, symbol, setWinnerCards) {
    if(grid[0]==symbol && grid[0]==grid[3] && grid[3]==grid[6]) {
        setWinnerCards([0, 3, 6]);
        return true;
    }
    if(grid[1]==symbol && grid[1]==grid[4] && grid[4]==grid[7]) {
        setWinnerCards([1, 4, 7]);
        return true;
    }
    if(grid[2]==symbol && grid[2]==grid[5] && grid[5]==grid[8]) {
        setWinnerCards([2, 5, 8]);
        return true;
    }

    if(grid[0]==symbol && grid[0]==grid[1] && grid[1]==grid[2]) {
        setWinnerCards([0, 1, 2]);
        return true;
    }
    if(grid[3]==symbol && grid[3]==grid[4] && grid[4]==grid[5]) {
        setWinnerCards([3, 4, 5]);
        return true;
    }
    if(grid[6]==symbol && grid[6]==grid[7] && grid[7]==grid[8]) {
        setWinnerCards([6, 7, 8]);
        return true;
    }

    if(grid[0]==symbol && grid[0]==grid[4] && grid[4]==grid[8]) {
        setWinnerCards([0, 4, 8]);
        return true;
    }
    if(grid[2]==symbol && grid[2]==grid[4] && grid[4]==grid[6]) {
        setWinnerCards([2, 4, 6]);
        return true;
    }

    return false;
}

export default isWinner;
