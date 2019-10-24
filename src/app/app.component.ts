import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-unit-testing';
  data: Array<object>;

  constructor(public DataService: DataService) {}

  ngOnInit() {
    this.DataService.getPost().subscribe((response) => {
      this.data = response;
    });
  }
}
