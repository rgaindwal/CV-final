import { Component, OnInit } from '@angular/core';
import { AcademicProjects } from './academic-projects.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-academic-projects',
  templateUrl: './academic-projects.component.html',
  styleUrls: ['./academic-projects.component.css']
})
export class AcademicProjectsComponent implements OnInit {
  apiUrl = "https://campus.reculta.com/reculta/api/getresumedata/";

  academics: AcademicProjects[] = [
    new AcademicProjects('*Course 1', 'Title',
      'Description 1'
    )
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.onGet();
  }

  onGet() {
    this.http.get(this.apiUrl).subscribe((response: Response) => {
      const data: any = response;

      this.setData(data);
    });
  }

  setData(data: any){
var tempacademics: AcademicProjects[]= [];

data.User.getProjectData.forEach(element => {
  var topic: string = element.student_project_domain;
  var title: string = element.student_project_title;
  var desciption: string = element.student_project_industry;
tempacademics.push(
  new AcademicProjects(topic, title, desciption)
);

this.academics = tempacademics;

});
  }

}
