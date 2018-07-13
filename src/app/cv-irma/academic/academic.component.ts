import { Component, OnInit } from '@angular/core';
import { Academic } from './academic.model';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  rowDraggable = false;
  childDraggable = true;


  constructor() { }

  ngOnInit() {
  }


 
}
