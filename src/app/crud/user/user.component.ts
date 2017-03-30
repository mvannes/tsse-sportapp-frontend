import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {Exercise} from "../sport/exercise/exercise";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  users: User[] = [
    new User(1, "lars", "l@rscornelissen.com", "kajfu38fn39$#TGerg$#TQG$%HQ#GAWERQ@$#"),
    new User(2, "boyd", "boyd@hogerheijde.com", "75c6fq44gq3%C$T@#%G@#%TG@4C#G@$%VG@C$"),
    new User(3, "fabian", "f@bianramos.com", "aergaergaer%C$T@#%G@#%TG@4C#G@$%VG@C$"),
    new User(4, "mitchell", "m@tchell.com", "43w56736734%C$T@#%G@#%TG@4C#G@$%VG@C$"),
    new User(5, "michael", "m@chael.com", "q23tqt3qet4%C$T@#%G@#%TG@4C#G@$%VG@C$"),
    new User(6, "floris", "fl@ris.com", "aeeagegrtvce%C$T@#%G@#%hTG@4C#G@$%VG@C$"),
    new User(7, "mohammed", "moh@mmed.com", "ijllmilhimohhm%C$T@#%G@#%TG#G@$%VG@C$")
  ];
}
