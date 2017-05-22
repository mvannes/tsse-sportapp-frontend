import {Component, OnInit} from '@angular/core';
import {Exercise} from "./exercise";
import {ExerciseService} from "./exercise.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  providers: [ExerciseService]
})
export class ExerciseComponent implements OnInit {
  exercises: Exercise[];
  selectedExercise: Exercise;

  constructor(
    private exerciseService: ExerciseService,
    private router: Router) { }



  getExercises(): void {
    this.exerciseService
      .getExercises()
      .then(exercises => this.exercises = exercises);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.exerciseService.create(name)
      .then(exercise => {
        this.exercises.push(exercise);
        this.selectedExercise = null;
      });
  }

  delete(exercise: Exercise): void {
    this.exerciseService
      .delete(exercise.id)
      .then(() => {
        this.exercises = this.exercises.filter(h => h !== exercise);
        if (this.selectedExercise === exercise) { this.selectedExercise = null; }
      });
  }

  ngOnInit(): void {
    this.getExercises();
   }

  onSelect(exercise: Exercise): void {
    this.selectedExercise = exercise;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedExercise.id]);
  }
}
