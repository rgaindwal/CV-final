import { Component, OnInit } from "@angular/core";
import { Achievement } from "./achievement.model";
import { HttpClient } from "../../../../node_modules/@angular/common/http";

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.css"]
})
export class AchievementsComponent implements OnInit {
  apiUrl = "https://campus.reculta.com/reculta/api/getresumedata/";

  achievements: Achievement[] = [
    new Achievement("Academic", "2015", "8.0 CGPA"),
    new Achievement(
      "Professional",
      "2017",
      "Android Developer of the month, July"
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

  setData(data: any) {
    var tempAchievements: Achievement[] = [];

    data.User.AchivmentActivitesForIIFT.forEach(element => {
      var type: string = element.student_cv_point_type;
      var year: string = element.student_cv_year;
      var description: string = element.student_cv_point_content;
  
      tempAchievements.push(new Achievement(type, year, description));
    });

this.achievements = tempAchievements;

  }
}
