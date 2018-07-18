import { Component, OnInit } from "@angular/core";
import { Academic } from "./academic.model";
import { HttpClient } from "../../../../node_modules/@angular/common/http";

@Component({
  selector: "app-academic",
  templateUrl: "./academic.component.html",
  styleUrls: ["./academic.component.css"]
})
export class AcademicComponent implements OnInit {
  apiUrl = "https://campus.reculta.com/reculta/api/getresumedata/";

  rowDraggable = false;
  childDraggable = true;

  academics: Academic[] = [
    new Academic("B.E.", "2014", "DU", "7.0"),
    new Academic("B.Sc", "2004", "DU", "6.9"),
    new Academic("F. Tech", "2006", "DU", "8.2")
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

  setData(data: any) {
    //X Data

    var academic_type: string =
      data.User.getAcademic_X_Data[0].student_academic_type;
    var year: string = data.User.getAcademic_X_Data[0].student_year_of_passing;
    var institute: string =
      data.User.getAcademic_X_Data[0].student_institute_name;
    var type: string;
    if (data.User.getAcademic_X_Data[0].student_score_type === "Percentage") {
      type = "%";
    } else if (data.User.getAcademic_X_Data[0].student_score_type === "CGPA") {
      type = "CGPA";
    }
    var score = data.User.getAcademic_X_Data[0].student_score_type_value + type;

    var tempAcademics: Academic[] = [
      new Academic(academic_type, year, institute, score)
    ];

    //XII Data

    academic_type = data.User.getAcademic_XII_Data[0].student_academic_type;
    year = data.User.getAcademic_XII_Data[0].student_year_of_passing;
    institute = data.User.getAcademic_XII_Data[0].student_institute_name;

    if (data.User.getAcademic_XII_Data[0].student_score_type === "Percentage") {
      type = "%";
    } else if (
      data.User.getAcademic_XII_Data[0].student_score_type === "CGPA"
    ) {
      type = "CGPA";
    }
    var score =
      data.User.getAcademic_XII_Data[0].student_score_type_value + " " + type;

    tempAcademics.push(new Academic(academic_type, year, institute, score));

    //Gradutaion Data
    academic_type =
      data.User.getAcademic_Graduation_Data[0].student_academic_type;
    year = data.User.getAcademic_Graduation_Data[0].student_year_of_passing;
    institute = data.User.getAcademic_Graduation_Data[0].student_institute_name;

    if (
      data.User.getAcademic_Graduation_Data[0].student_score_type ===
      "Percentage"
    ) {
      type = "%";
    } else if (
      data.User.getAcademic_Graduation_Data[0].student_score_type === "CGPA"
    ) {
      type = "CGPA";
    }
    var score =
      data.User.getAcademic_Graduation_Data[0].student_score_type_value +
      " " +
      type;

    tempAcademics.push(new Academic(academic_type, year, institute, score));

    //Post Graduation Data

    academic_type =
      data.User.getAcademic_Post_Graduation_Data[0].student_academic_type;
    year =
      data.User.getAcademic_Post_Graduation_Data[0].student_year_of_passing;
    institute =
      data.User.getAcademic_Post_Graduation_Data[0].student_institute_name;

    if (
      data.User.getAcademic_Post_Graduation_Data[0].student_score_type ===
      "Percentage"
    ) {
      type = "%";
    } else if (
      data.User.getAcademic_Post_Graduation_Data[0].student_score_type ===
      "CGPA"
    ) {
      type = "CGPA";
    }
    var score =
      data.User.getAcademic_Post_Graduation_Data[0].student_score_type_value +
      " " +
      type;
    tempAcademics.push(new Academic(academic_type, year, institute, score));

    //Certificate

    data.User.getAcademic_Certificate_Data.forEach(element => {
      academic_type = element.student_academic_type;
      year = element.student_year_of_passing;
      institute = element.student_institute_name;

      if (element.student_score_type === "Percentage") {
        type = "%";
      } else if (element.student_score_type === "CGPA") {
        type = "CGPA";
      }
      var score = element.student_score_type_value + " " + type;
      tempAcademics.push(new Academic(academic_type, year, institute, score));
    });

    this.academics = tempAcademics;
  }
}
