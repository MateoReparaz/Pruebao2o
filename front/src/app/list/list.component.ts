import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(data => console.log(data))
  }

}
