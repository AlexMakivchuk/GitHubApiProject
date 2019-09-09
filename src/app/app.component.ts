import { Component } from '@angular/core';
import {UserService} from "./user.service";
import {UserFindService} from "./shared/services/user-find.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestISolution';
  name = '';

  constructor(public router: Router) {
    this.router.navigate(['/pagination'])
  }
}
