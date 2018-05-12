import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Output() filterByCompletion: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleClickOnCategory(category: number){
    this.filterByCompletion.emit(category);
  }

}
