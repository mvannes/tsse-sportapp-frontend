import {Component, OnInit} from '@angular/core';
import {Workout} from './workout';
import {Exercise} from '../exercise/exercise';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

    constructor() {
  }

  ngOnInit() {
  }

  //
  // workout
  // private _id: number;
  // private _name: string;
  // private _description: string;
  // private _exercises: Exercise[];
  //
  //
  // exercise
  // public _id: number;
  // public _name : string;
  // public _description: string;
  // public _category: string;
  // public _mediaFiles : string[];


  workouts: Workout[] = [
    new Workout(1, 'name', 'desc', [new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']), new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
    new Workout(2, 'name', 'desc', [new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']), new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
    new Workout(3, 'name', 'desc', [new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']), new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
    new Workout(4, 'name', 'desc', [new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']), new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])])
  ];

}
