import {Component, OnInit} from '@angular/core';
import {Schedule} from "./schedule";
import {Workout} from "../workout/workout";
import {Exercise} from "../exercise/exercise";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  schedules: Schedule[] = [
    new Schedule(1, "name", "desc", [
      new Workout(1, 'name', 'desc', [
        new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
        new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
      new Workout(1, 'name', 'desc', [
        new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
        new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
      new Workout(1, 'name', 'desc', [
        new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
        new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])])],
      3),
    new Schedule(1, "name", "desc", [
        new Workout(1, 'name', 'desc', [
          new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
          new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
        new Workout(1, 'name', 'desc', [
          new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
          new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
        new Workout(1, 'name', 'desc', [
          new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
          new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])])],
      3),
    new Schedule(1, "name", "desc", [
        new Workout(1, 'name', 'desc', [
          new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
          new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
        new Workout(1, 'name', 'desc', [
          new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
          new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])]),
        new Workout(1, 'name', 'desc', [
          new Exercise(1, 'idw', 'desc', 'cat', ['media', 'medi77a2', 'm7777edia2', 'm7777edia2', 'me777777dia2']),
          new Exercise(2, 'idw', 'desc', 'cat', ['media', 'media2'])])],
      3)
  ];

}
