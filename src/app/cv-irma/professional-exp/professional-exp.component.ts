import { Component, OnInit } from "@angular/core";
import { ProfessionalExp } from "./professional-exp.model";

@Component({
  selector: "app-professional-exp",
  templateUrl: "./professional-exp.component.html",
  styleUrls: ["./professional-exp.component.css"]
})
export class ProfessionalExpComponent implements OnInit {
  
  professionalExps: ProfessionalExp[] = [
    new ProfessionalExp(
      "RSVR Tech",
      "Android Developer",
      "May,2016",
      "May,2018",
      ["Worked on Android Auto apps"]
    )
  ];

  constructor() {}

  ngOnInit() {}
}
