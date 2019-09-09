import { Component, OnInit } from '@angular/core';
import {IUserData} from "../../interfaces/user-data.interface";
import {UserFindService} from "../../shared/services/user-find.service";
import {fadeStateTrigger} from "../../shared/animation/fade.animations";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  animations: [fadeStateTrigger]
})
export class UserInfoComponent implements OnInit {
  public userData: IUserData;
  constructor(public userFindService: UserFindService) {
  }

  ngOnInit() {
    this.userData= this.userFindService.userInfo;
  }

}
