import { ValuesController } from "./Controllers/ValuesController.js";
import { RaceController } from "./Controllers/RaceController.js"

class App {
  // valuesController = new ValuesController();
  raceController = new RaceController();
}

window["app"] = new App();


