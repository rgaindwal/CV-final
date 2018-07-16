import { Component, OnInit } from "@angular/core";
import { PostionOfResponsibility } from "./position-of-responsibility.model";

@Component({
  selector: "app-positon-of-responsibility",
  templateUrl: "./positon-of-responsibility.component.html",
  styleUrls: ["./positon-of-responsibility.component.css"]
})
export class PositonOfResponsibilityComponent implements OnInit {
  postionOfResponsibilities: PostionOfResponsibility[] = [
    new PostionOfResponsibility('Head of Society', '2016', [
      'Headed the team for the year 2015'
    ]),
    new PostionOfResponsibility('Team Head', '2017', [
      'Headed the team for the year 2017'
    ]),
  ];

  constructor() {}

  ngOnInit() {}
}
