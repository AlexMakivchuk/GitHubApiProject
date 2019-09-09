import {Component, Input, OnInit} from '@angular/core';
import {IClientData} from "../../interfaces/client-data.interface";
import {IUserData} from "../../interfaces/user-data.interface";
import {UserFindService} from "../../shared/services/user-find.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  @Input() public userData: IClientData;
  panelOpenState = false;
  constructor(private userFindService: UserFindService,
              private router: Router) {
    }
  private openUserInfo(){
    this.userFindService.loadRepos(this.userData);
     }
  ngOnInit() {

  }


}
