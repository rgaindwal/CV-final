import { Component, OnInit } from "@angular/core";
import { Achievement } from "./achievement.model";

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.css"]
})
export class AchievementsComponent implements OnInit {

  achievements: Achievement[] = [
    new Achievement('Academic', '2015', ['8.0 CGPA']),
    new Achievement('Professional', '2017', [
      'Android Developer of the month, July',
      'Made 2 apps'
    ])
  ];

  constructor() {}

  ngOnInit() {}
}
