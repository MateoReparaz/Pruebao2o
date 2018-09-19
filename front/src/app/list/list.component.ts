import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  recipes: Array<any>;
  pattern;

  constructor(public apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getRecipes().subscribe(data => {
      this.recipes = data;
    })
  }

}
