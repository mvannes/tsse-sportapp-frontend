import {Injectable} from "@angular/core";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Headers, Http} from "@angular/http";
import {User} from "./user";
import {environment} from "../../../environments/environment";

@Injectable()
export class UserService {


  private usersUrl = environment.apiUrl +  "users/";  // URL to web API
  private headers = new Headers();


  constructor(private http: Http) {
    // this.headers.append('Authorization', 'Basic ' + btoa('TSSE:welkom123'));
    // this.headers.append('getUsers', 'text/plain');
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
