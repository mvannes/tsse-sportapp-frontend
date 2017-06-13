import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule, routableComponents} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {NavigationComponent} from './crud/navigation/navigation.component';
import { ExerciseComponent } from './crud/sport/exercise/exercise.component';
import { ScheduleComponent } from './crud/sport/schedule/schedule.component';
import { WorkoutComponent } from './crud/sport/workout/workout.component';
import { UserComponent } from './crud/user/user.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    routableComponents,
    NavigationComponent,
    ExerciseComponent,
    ScheduleComponent,
    WorkoutComponent,
    UserComponent,
    CrudComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
