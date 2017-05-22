import {Injectable} from "@angular/core";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Headers, Http} from "@angular/http";
import {Exercise} from "./exercise";

@Injectable()
export class ExerciseService {

  private exercisesUrl = 'http://145.28.225.69:8080/api/exercises/';  // URL to web API
  private headers = new Headers();


  constructor(private http: Http) {
  }

  getExercises(): Promise<Exercise[]> {
    this.headers.append('Authorization', 'Basic ' + btoa('TSSE:welkom123'));
    this.headers.append('getExercises', 'text/plain');
    return this.http.get(this.exercisesUrl
      , {headers : this.headers}
    ).toPromise()
      .then(response => response.json().data as Exercise[])
      .catch(this.handleError);
  }

  getExercise(id: number): Promise<Exercise> {
    const url = `${this.exercisesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Exercise)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.exercisesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Exercise> {
    return this.http
      .post(this.exercisesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Exercise)
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
