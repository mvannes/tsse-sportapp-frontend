import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Message} from "../models/message";
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {
  constructor(private http: Http) {}

  getMessages(){
    return this.http.get('https://uat.pabbl.com:5543/pabblfeeds/greeting')
      .map((response: Response) => <Message[]>response.json().data);
  }
}
