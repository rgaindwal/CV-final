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
  
  academics: Academic[] = [
    new Academic('B.E.', 2014, 'DU', 7.0),
    new Academic('B.Sc', 2004, 'DU', 6.9),
    new Academic('F. Tech', 2006, 'DU', 8.2),
  ];

  constructor() { }

  ngOnInit() {
  }


 
}
