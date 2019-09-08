import {Component, Input, OnInit} from '@angular/core';
import {IClientData} from "../../interfaces/client-data.interface";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  @Input() public userData: IClientData;
  panelOpenState = false;
  constructor() {
    }

  ngOnInit() {

  }


}
