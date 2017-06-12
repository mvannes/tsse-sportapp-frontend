import {Injectable} from "@angular/core";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Headers, Http} from "@angular/http";
import {Schedule} from "./schedule";
import {environment} from "../../../../environments/environment";

@Injectable()
export class ScheduleService {

  private schedulesUrl = environment.apiUrl +  "schedules/";  // URL to web API
  private headers = new Headers();


  constructor(private http: Http) {
    this.headers.append('Authorization', 'Basic ' + btoa('TSSE:welkom123'));
    this.headers.append('getSchedules', 'text/plain');
  }

  getSchedules(): Promise<Schedule[]> {
    return this.http.get(this.schedulesUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Schedule[])
      .catch(this.handleError);
  }

  getSchedule(id: number): Promise<Schedule> {
    const url = `${this.schedulesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Schedule)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.schedulesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Schedule> {
    return this.http
      .post(this.schedulesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Schedule)
      .catch(this.handleError);
  }

  update(schedule: Schedule): Promise<Schedule> {
    const url = `${this.schedulesUrl}/${schedule.id}`;
    return this.http
      .put(url, JSON.stringify(schedule), {headers: this.headers})
      .toPromise()
      .then(() => schedule)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
