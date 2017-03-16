import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-session-list',
  templateUrl: './chat-session-list.component.html',
  styleUrls: ['./chat-session-list.component.scss']
})
export class ChatSessionListComponent{

  // constructor() { }
  //
  // ngOnInit() {
  // }
  sessions = [
    {
      title: "herro"
    },
    {
      title: "hii"
    },
];

}
