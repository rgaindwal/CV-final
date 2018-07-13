import { Component, OnInit, Input } from "@angular/core";
import { Academic } from "../academic.model";

@Component({
  selector: "app-academic-row",
  templateUrl: "./academic-row.component.html",
  styleUrls: ["./academic-row.component.css"]
})
export class AcademicRowComponent implements OnInit {
 
  academics: Academic[] = [
    new Academic('B.E.', 2014, 'DU', 7.0),
    new Academic('B.Sc', 2004, 'DU', 6.9),
    new Academic('F. Tech', 2006, 'DU', 8.2),
  ];

  constructor() {}

  ngOnInit() {}



}
