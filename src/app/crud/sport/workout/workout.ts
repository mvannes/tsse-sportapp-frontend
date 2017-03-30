import {Exercise} from "../exercise/exercise";
export class Workout {

  private _id: number;
  private _name: string;
  private _description: string;
  private _exercises: Exercise[];


  constructor(id: number, name: string, description: string, exercises: Exercise[]) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._exercises = exercises;
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

  get exercises(): Exercise[] {
    return this._exercises;
  }

  set exercises(value: Exercise[]) {
    this._exercises = value;
  }
}
