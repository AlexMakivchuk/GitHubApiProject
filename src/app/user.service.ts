import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {
  }

  getUsers(name) {
    return this.http.get(`https://api.github.com/search/users?q=${name}&page=1&per_page=100`)
      .pipe(map((response: Response) => response) )

  }
}
