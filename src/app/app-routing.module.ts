import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ExerciseComponent} from "./crud/sport/exercise/exercise.component";
import {WorkoutComponent} from "./crud/sport/workout/workout.component";
import {ScheduleComponent} from "./crud/sport/schedule/schedule.component";
import {UserComponent} from "./crud/user/user.component";
import {CrudComponent} from "./crud/crud.component"


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  }, {
    path: 'crud',
    component: CrudComponent,
    children: [
      {path: '', redirectTo: 'exercises', pathMatch: 'full'},
      {path: 'exercises', component: ExerciseComponent},
      {path: 'workouts', component: WorkoutComponent},
      {path: 'schedules', component: ScheduleComponent},
      {path: 'users', component: UserComponent}
    ]
  }, {
  path: '',
    redirectTo: 'login' ,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routableComponents = [
  LoginComponent
];
