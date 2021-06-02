import java.util.Arrays;

public abstract class GameOfLife {

    protected int rowCount;
    protected int columnCount;

    public int[][] grid;
    public final static int DEAD_CELL = 0;
    public final static int LIVING_CELL = 1;

    public abstract void computeNextGeneration();

    public GameOfLife(int rowCount, int columnCount) {
        grid = new int [rowCount][columnCount];
        this.rowCount = grid.length;
        this.columnCount = grid[0].length;
        initializeGridWithDeadCells();
    }

    public void initializeGridWithDeadCells(){
        for (int y = 0; y < this.rowCount; y++) {
            Arrays.fill(grid[y], DEAD_CELL);
        }
    }

    public void setLivingCell(int row, int column) {
        grid[row][column] = LIVING_CELL;
    }

    public void display() {
        for (int i = 0; i < grid.length; i++) {
            String line = "";
            for (int j= 0; j < grid[i].length; j++) {
                line += grid[i][j];
            }
            System.out.println(line);
        }
    }
}
