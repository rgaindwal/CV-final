import { Component, OnInit } from "@angular/core";
import { PostionOfResponsibility } from "./position-of-responsibility.model";
import { HttpClient } from "../../../../node_modules/@angular/common/http";

@Component({
  selector: "app-positon-of-responsibility",
  templateUrl: "./positon-of-responsibility.component.html",
  styleUrls: ["./positon-of-responsibility.component.css"]
})
export class PositonOfResponsibilityComponent implements OnInit {
  apiUrl = "https://campus.reculta.com/reculta/api/getresumedata/";


  postionOfResponsibilities: PostionOfResponsibility[] = [
    new PostionOfResponsibility('Head of Society', '2016', 
      'Headed the team for the year 2015'
    ),
    new PostionOfResponsibility('Team Head', '2017', 
      'Headed the team for the year 2017'
    ),
  ];

  constructor(private http: HttpClient) {}

  onGet() {
    this.http.get(this.apiUrl).subscribe((response: Response) => {
      const data: any = response;
 
      this.setData(data);
    });
  }

  setData(data: any){

    var tempResponsibility: PostionOfResponsibility[] = [];

    data.User.getResponsibilityData.forEach(element => {
      var designation: string = 
      element.student_cv_header;
      var year: string = 
      element.student_cv_year;
      var details: string = 
      element.student_cv_point_content;
      // console.log(details);
      tempResponsibility.push(
        new PostionOfResponsibility(designation, year, details)
      );
}); {
      
    }

   this.postionOfResponsibilities = tempResponsibility;

  }

  ngOnInit() {
    this.onGet();
  }
}
