import {Injectable} from "@angular/core";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Headers, Http} from "@angular/http";
import {Exercise} from "./exercise";
import {environment} from "../../../../environments/environment";

@Injectable()
export class ExerciseService {

  private exercisesUrl = environment.apiUrl +  "exercises/";  // URL to web API
  private headers = new Headers();


  constructor(private http: Http) {
    // this.headers.append('Authorization', 'Basic ' + btoa('tsse:welkom123'));
  this.headers.append('Content-Type', 'application/json' );
  }

  getExercises(): Promise<Exercise[]> {
    console.log(this.exercisesUrl);
    return this.http.get(this.exercisesUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Exercise[])
      .catch(this.handleError);
  }

  getExercise(id: number): Promise<Exercise> {
    const url = `${this.exercisesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Exercise)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.exercisesUrl}${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(exercise: Exercise): Promise<Exercise> {
    return this.http
      .post(this.exercisesUrl, JSON.stringify(exercise), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Exercise)
      .catch(this.handleError);
  }

  update(exercise: Exercise): Promise<Exercise> {
    const url = `${this.exercisesUrl}/${exercise.id}`;
    return this.http
      .put(url, JSON.stringify(exercise), {headers: this.headers})
      .toPromise()
      .then(() => exercise)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
