public class Main {



    public static void main(String[] args) {

        GameOfLife gameOfLifeSolution = new GameOfLifeSolution(4,8);
        gameOfLifeSolution.setLivingCell(1, 1);
        gameOfLifeSolution.setLivingCell(1, 2);
        gameOfLifeSolution.setLivingCell(1, 3);
        gameOfLifeSolution.setLivingCell(2, 1);

        displayNIteration(8, gameOfLifeSolution);

    }

    private static void displayIteration(int iteration, GameOfLife g) {

        System.out.println("**** Iteration " + iteration + "****");
        g.display();
        System.out.println("******************");
    }

    private static void displayNIteration(int n, GameOfLife g) {
        for (int i =0; i < n; i++) {
            displayIteration(i, g);
            g.computeNextGeneration();
        }
    }

}
