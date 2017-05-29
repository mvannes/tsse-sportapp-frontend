import {Workout} from "../workout/workout";
export class Schedule {

  public id: number;
  public name: string;
  public description: string;
  public workouts: Workout[];
  public amountOfTrainingsPerWeek: number;


  constructor(id: number, name: string, description: string, workouts: Workout[], amountOfTrainingsPerWeek: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.workouts = workouts;
    this.amountOfTrainingsPerWeek = amountOfTrainingsPerWeek;
  }
}
