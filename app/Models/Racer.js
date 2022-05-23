// racer class , racer position
import { generateId } from "../Utils/generateId.js"

export class Racer {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
  }
}