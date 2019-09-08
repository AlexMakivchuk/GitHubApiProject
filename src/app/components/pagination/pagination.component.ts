import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserFindService} from "../../shared/services/user-find.service";
import {MatPaginator,  PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IClientData} from "../../interfaces/client-data.interface";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {

  private paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
  }
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['id', 'login'];
  private dataSource = [];
  private stateTable= false;
  private  index = 1;
  private length = 1000;
  private pageSize = 25;

  private name = 'alexandr';
  private pageEvent: PageEvent;
  private searchingForm: FormGroup;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private userFindService: UserFindService
  ) {

  }

  onSubmit() {
    this.stateTable = true;
    this.index = 1;
    this.loadPage();
    setTimeout(() =>{
      this.paginator.firstPage();
    },50)
  }

  ngOnInit() {
    this.searchingForm =  new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)])
      }
    );
  }

  catchPaginationChangeEvent(catchedEvent: PageEvent) {
    this.pageEvent = catchedEvent;
    this.pageSize = catchedEvent.pageSize;
    this.index = catchedEvent.pageIndex + 1;
    this.length = catchedEvent.length;
    this.loadPage();
  }

  private loadPage() {

    this.userFindService.getUsers(this.searchingForm.value.username, this.index, this.pageSize).subscribe(x => {
      this.length = x.total_count;
      this.dataSource = x.items;
    });
  }

  private clickTr(element: IClientData) {
    console.log(element);
    this.http.get<string[]>(element.repos_url).subscribe((item) => {console.log(item.length)
    })


  }

}

