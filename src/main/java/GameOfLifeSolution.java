import java.util.Arrays;

/**
 * Created by fabricejeannet on 16/09/2014.
 */
public class GameOfLifeSolution extends GameOfLife {

    public GameOfLifeSolution(int rowCount, int columnCount) {
        super(rowCount, columnCount);
    }

    public int countlivingNeighbours(int row, int column) {

        int[][] cellsToCheck = {
                {row - 1, column - 1},
                {row - 1, column},
                {row - 1, column + 1},
                {row, column + 1},
                {row + 1, column + 1},
                {row + 1, column},
                {row + 1, column - 1},
                {row, column - 1},
        };

        int livingNeighbours = 0;

        for (int i = 0; i < cellsToCheck.length; i++) {

            int rowToCheck = cellsToCheck[i][0];
            int colTocheck = cellsToCheck[i][1];

            if (isInTheGrid(rowToCheck, colTocheck) && isAlive(rowToCheck, colTocheck)) {
                livingNeighbours ++ ;
            }

        }

        return livingNeighbours;
    }

    private boolean isInTheGrid(int row, int col) {
        return row >= 0 && col >= 0 && row < rowCount && col < columnCount;
    }

    public void computeNextGeneration() {

        int[][] nextGenerationGrid = new int[rowCount][columnCount];

        for (int y = 0; y < rowCount; y++) {

            for (int x = 0; x < columnCount; x++) {

                if (thisCellIsAliveAndHasLessThanTwoLivingNeighbours(y, x)) {
                    nextGenerationGrid[y][x] = DEAD_CELL;
                } else if (thisCellIsAliveAndHasTwoOrThreeLivingNeighbours(y, x)) {
                    nextGenerationGrid[y][x] = LIVING_CELL;
                } else if (thisCellIsAliveAndHasMoreThanThreeLivingNeighbours(y, x)) {
                    nextGenerationGrid[y][x] = DEAD_CELL;
                } else if (thisCellIsDeadAndHasThreeLivingNeighbours(y, x)) {
                    nextGenerationGrid[y][x] = LIVING_CELL;
                } else {
                    nextGenerationGrid[y][x] = grid[y][x];
                }
            }

        }

        grid = nextGenerationGrid.clone();
    }

    private boolean thisCellIsDeadAndHasThreeLivingNeighbours(int row, int column) {
        int livingNeighbours = countlivingNeighbours(row, column);
        return isDead(row, column) && livingNeighbours == 3;
    }

    private boolean thisCellIsAliveAndHasMoreThanThreeLivingNeighbours(int row, int column) {
        int livingNeighbours = countlivingNeighbours(row, column);
        return isAlive(row, column) && livingNeighbours > 3;
    }

    private boolean thisCellIsAliveAndHasTwoOrThreeLivingNeighbours(int row, int column) {
        int livingNeighbours = countlivingNeighbours(row, column);
        return isAlive(row, column) && (livingNeighbours == 2 || livingNeighbours == 3);
    }

    private boolean thisCellIsAliveAndHasLessThanTwoLivingNeighbours(int row, int column) {
        int neighboursCount = countlivingNeighbours(row, column);
        return isAlive(row, column) && neighboursCount < 2;
    }


    public boolean isAlive(int row, int column) {
        return grid[row][column] == LIVING_CELL;
    }

    public boolean isDead(int row, int column) {
        return grid[row][column] == DEAD_CELL;
    }

}
