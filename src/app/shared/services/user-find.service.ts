import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ITableResponse} from "../../interfaces/table-response.interface";
import {IClientData} from "../../interfaces/client-data.interface";
import {IUserData} from "../../interfaces/user-data.interface";

@Injectable({
  providedIn: 'root'
})

export class UserFindService {
 public usersItems: IClientData[];
 public userInfo: IUserData;
 public prefix = environment.backEndUrl;

  constructor(private http: HttpClient) {
  }

  public getUsers(name: string, pageValue: number, countPages):Observable<ITableResponse> {
    return this.http.get<ITableResponse>(this.buildUrl(name, pageValue, countPages ));
  }

  private buildUrl (name: string, pageValue: number, countPages: number){
    return this.prefix + "search/users?q=" + name + "&page=" + pageValue + "&per_page=" + countPages;
  }
  public loadRepos(element: IClientData) {
    this.http.get(element.url).subscribe((item: IUserData) => {
    this.userInfo= item;
    })
  }
  public buildReposUrl(){

  }
}
