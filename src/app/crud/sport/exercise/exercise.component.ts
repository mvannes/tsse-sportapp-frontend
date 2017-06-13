import {Component, OnInit} from "@angular/core";
import {Exercise} from "./exercise";
import {ExerciseService} from "./exercise.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  providers: [ExerciseService],
})
export class ExerciseComponent implements OnInit {
  // exercises: Exercise[] = [];
  selectedExercise: Exercise;
  newExercise: Exercise;

  exercises: Exercise[] = [
    new Exercise(1, "idw", "desc", ["media", "medi77a2", "m7777edia2", "m7777edia2", "me777777dia2"], "name")
  ];


  constructor(private exerciseService: ExerciseService,
              private router: Router) {
  }

  getExercises(): void {
    this.exerciseService
      .getExercises()
      .then(exercises => this.exercises = exercises);
  }

  addExercise(): void {
    this.exerciseService.create(this.newExercise)
      .then(exercise => {
        this.exercises.push(exercise);
        this.newExercise = null;
      });
  }

  editExercise(): void {
    this.exerciseService.update(this.selectedExercise)
      .then(exercise => {
        this.selectedExercise = null;
      });
  }


  deleteExercise(exercise: Exercise): void {
    this.exerciseService
      .delete(exercise.id)
      .then(() => {
        this.exercises = this.exercises.filter(h => h !== exercise);
        if (this.selectedExercise === exercise) {
          this.selectedExercise = null;
        }
      });
  }

  ngOnInit(): void {
    this.getExercises();
  }

  onSelect(exercise: Exercise): void {
    this.selectedExercise = exercise;
  }

  onNew(): void {
    this.newExercise = new Exercise(0, "", "", [""], "");
  }

  newExerciseCancel(): void {
    this.newExercise = null;
  }

  selectedExerciseCancel(): void {
    this.selectedExercise = null;
  }

}
