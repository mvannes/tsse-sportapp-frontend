import {Component, OnInit} from "@angular/core";
import {User} from "./user";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser: User;

  constructor(private userService: UserService,
              private router: Router) {
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.userService.create(name)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  delete(user: User): void {
    this.userService
      .delete(user.id)
      .then(() => {
        this.users = this.users.filter(h => h !== user);
        if (this.selectedUser === user) {
          this.selectedUser = null;
        }
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
}
