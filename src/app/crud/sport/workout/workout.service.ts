import {Injectable} from "@angular/core";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Headers, Http} from "@angular/http";
import {Workout} from "./workout";
import {environment} from "../../../../environments/environment";

@Injectable()
export class WorkoutService {

  private workoutsUrl = environment.apiUrl +  "workouts/";  // URL to web API
  private headers = new Headers();


  constructor(private http: Http) {
    this.headers.append('Authorization', 'Basic ' + btoa('TSSE:welkom123'));
    this.headers.append('getWorkouts', 'text/plain');
  }

  getWorkouts(): Promise<Workout[]> {
    return this.http.get(this.workoutsUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Workout[])
      .catch(this.handleError);
  }

  getWorkout(id: number): Promise<Workout> {
    const url = `${this.workoutsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Workout)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.workoutsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Workout> {
    return this.http
      .post(this.workoutsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Workout)
      .catch(this.handleError);
  }

  update(workout: Workout): Promise<Workout> {
    const url = `${this.workoutsUrl}/${workout.id}`;
    return this.http
      .put(url, JSON.stringify(workout), {headers: this.headers})
      .toPromise()
      .then(() => workout)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
