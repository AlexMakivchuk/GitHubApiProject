import { Component } from '@angular/core';
import {UserService} from "./user.service";
import {UserFindService} from "./shared/services/user-find.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestISolution';
  arr = [];
  name = '';

  constructor(
    public userService: UserFindService
  ) {}
  Click() {

  }
}
