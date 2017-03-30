import {Workout} from "../workout/workout";
export class Schedule {

  private _id: number;
  private _name: string;
  private _description: string;
  private _workouts: Workout[];
  private _amountOfTrainingsPerWeek: number;


  constructor(id: number, name: string, description: string, workouts: Workout[], amountOfTrainingsPerWeek: number) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._workouts = workouts;
    this._amountOfTrainingsPerWeek = amountOfTrainingsPerWeek;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get workouts(): Workout[] {
    return this._workouts;
  }

  set workouts(value: Workout[]) {
    this._workouts = value;
  }

  get amountOfTrainingsPerWeek(): number {
    return this._amountOfTrainingsPerWeek;
  }

  set amountOfTrainingsPerWeek(value: number) {
    this._amountOfTrainingsPerWeek = value;
  }
}
