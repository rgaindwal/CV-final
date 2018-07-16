import { Component, OnInit } from '@angular/core';
import { AcademicProjects } from './academic-projects.model';

@Component({
  selector: 'app-academic-projects',
  templateUrl: './academic-projects.component.html',
  styleUrls: ['./academic-projects.component.css']
})
export class AcademicProjectsComponent implements OnInit {

  academics: AcademicProjects[] = [
    new AcademicProjects('*Course 1', 'Title',[
      '[Description 1]]',
      '[Description 2]'
    ])
  ];

  constructor() { }

  ngOnInit() {
  }

}
