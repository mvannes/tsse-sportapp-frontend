import {Component, OnInit} from "@angular/core";
import {Workout} from "./workout";
import {WorkoutService} from "./workout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
  providers: [WorkoutService],
})
export class WorkoutComponent implements OnInit {
  workouts: Workout[] = [];
  selectedWorkout: Workout;

  constructor(private workoutService: WorkoutService,
              private router: Router) {
  }

  getWorkouts(): void {
    this.workoutService
      .getWorkouts()
      .then(workouts => this.workouts = workouts);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.workoutService.create(name)
      .then(workout => {
        this.workouts.push(workout);
        this.selectedWorkout = null;
      });
  }

  delete(workout: Workout): void {
    this.workoutService
      .delete(workout.id)
      .then(() => {
        this.workouts = this.workouts.filter(h => h !== workout);
        if (this.selectedWorkout === workout) {
          this.selectedWorkout = null;
        }
      });
  }

  ngOnInit(): void {
    this.getWorkouts();
  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedWorkout.id]);
  }
}
