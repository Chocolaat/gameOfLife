package org.sch.gameoflife;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class GameOfLifeResource {

  @GetMapping("/hello")
  public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
    return String.format("Hello %s!", name);
  }

  @GetMapping("/newGame")
  public GameOfLife getNewGame() {
    return new GameOfLifeSolution(36, 36);
  }

  @PostMapping("/nextGenerationSolution")
  public GameOfLifeDTO nextGenerationSolution(@RequestBody GameOfLifeDTO game) {

    GameOfLife res = new GameOfLifeSolution(game);
    res.computeNextGeneration();
    return new GameOfLifeDTO(res);
  }

  @PostMapping("/nextGenerationDojo")
  public GameOfLifeDTO nextGenerationDojo(@RequestBody GameOfLifeDTO game) {

    GameOfLife res = new GameOfLifeDojo(game);
    res.computeNextGeneration();
    return new GameOfLifeDTO(res);
  }


}
