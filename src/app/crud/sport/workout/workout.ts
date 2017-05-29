import {Exercise} from "../exercise/exercise";
export class Workout {

  public id: number;
  public name: string;
  public description: string;
  public exercises: Exercise[];


  constructor(id: number, name: string, description: string, exercises: Exercise[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.exercises = exercises;
  }
}
