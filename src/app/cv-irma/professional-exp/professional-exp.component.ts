import { Component, OnInit } from "@angular/core";
import { ProfessionalExp } from "./professional-exp.model";
import { HttpClient } from "../../../../node_modules/@angular/common/http";

@Component({
  selector: "app-professional-exp",
  templateUrl: "./professional-exp.component.html",
  styleUrls: ["./professional-exp.component.css"]
})
export class ProfessionalExpComponent implements OnInit {
  apiUrl = "https://campus.reculta.com/reculta/api/getresumedata/";

  professionalExps: ProfessionalExp[] = [
    new ProfessionalExp(
      "RSVR Tech",
      "Android Developer",
      "May,2016",
      "May,2018",
      "Worked on Android Auto apps"
    )
  ];

  constructor(private http: HttpClient) {}

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
var tempProfesionalData: ProfessionalExp[] = [];

  data.User.getProfessionalData.forEach(element => {
    var companyName: string = element.student_experience_company_name;
    var position: string = element.student_experience_designation;
    var startDate: string = element.student_experience_start_date;
    var endDate: string = element.student_experience_end_date;

    var description: string = element.student_experience_role_description;

    tempProfesionalData.push(
      new ProfessionalExp(companyName, position, startDate, endDate, description)
    );

this.professionalExps = tempProfesionalData;

  });
}

}
