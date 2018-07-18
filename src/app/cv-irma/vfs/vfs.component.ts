import { Component, OnInit } from "@angular/core";
import { vfs } from "./vfs.model";
import { HttpClient } from "../../../../node_modules/@angular/common/http";


@Component({
  selector: "app-vfs",
  templateUrl: "./vfs.component.html",
  styleUrls: ["./vfs.component.css"]
})
export class VfsComponent implements OnInit {
  apiUrl = "https://campus.reculta.com/reculta/api/getresumedata/";

  vfses: vfs[] = [
    new vfs("Delhi", "Machine Learning", "Title", [
      "Somthing to do with Machine learning",
      "This one thing with machine learning too"
    ]),
    new vfs("Delhi", "Angular", "Title", [
      "Somthing to do with Angular.js",
      "This one thing with Angular 2"
    ])
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onGet();
  }

  onGet() {
    this.http.get(this.apiUrl).subscribe((response: Response) => {
      const data: any = response;
      console.log(data.User.getPersonalData[0].student_title);
      console.log(data.User.getPersonalData[0].student_gender);

     

      this.setData(data);
    });
  }

setData(data: any){

}

}
